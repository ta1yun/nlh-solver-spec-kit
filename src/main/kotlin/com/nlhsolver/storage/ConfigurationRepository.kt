package com.nlhsolver.storage

import com.nlhsolver.poker.Position
import com.nlhsolver.proto.ConfigurationProto.*
import com.nlhsolver.solver.*
import java.io.FileInputStream
import java.io.FileOutputStream
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.time.Instant
import java.util.UUID
import java.util.zip.GZIPInputStream
import java.util.zip.GZIPOutputStream

/**
 * Repository for persisting and retrieving SolveConfiguration entities (T053).
 *
 * Uses Protocol Buffers with gzip compression for efficient storage.
 * Configurations are stored in data/configurations/ directory.
 */
class ConfigurationRepository(
    private val storageDir: Path = Paths.get("data/configurations")
) {
    init {
        // Ensure storage directory exists
        Files.createDirectories(storageDir)
    }

    /**
     * Save a configuration to disk.
     *
     * @param configuration The configuration to save
     * @return The saved configuration (with updated timestamp)
     */
    fun save(configuration: SolveConfiguration): SolveConfiguration {
        val updated = configuration.copy(updatedAt = Instant.now())
        val pb = toProtobuf(updated)
        val filePath = getFilePath(updated.configId)

        // Write with gzip compression
        FileOutputStream(filePath.toFile()).use { fileOut ->
            GZIPOutputStream(fileOut).use { gzipOut ->
                pb.writeTo(gzipOut)
            }
        }

        return updated
    }

    /**
     * Find a configuration by ID.
     *
     * @param configId Configuration UUID
     * @return The configuration, or null if not found
     */
    fun findById(configId: UUID): SolveConfiguration? {
        val filePath = getFilePath(configId)
        if (!Files.exists(filePath)) {
            return null
        }

        return try {
            FileInputStream(filePath.toFile()).use { fileIn ->
                GZIPInputStream(fileIn).use { gzipIn ->
                    val pb = SolveConfigurationPb.parseFrom(gzipIn)
                    fromProtobuf(pb)
                }
            }
        } catch (e: Exception) {
            null
        }
    }

    /**
     * Find all configurations.
     *
     * @return List of all configurations
     */
    fun findAll(): List<SolveConfiguration> {
        return Files.list(storageDir)
            .filter { it.toString().endsWith(".pb.gz") }
            .map { path ->
                FileInputStream(path.toFile()).use { fileIn ->
                    GZIPInputStream(fileIn).use { gzipIn ->
                        val pb = SolveConfigurationPb.parseFrom(gzipIn)
                        fromProtobuf(pb)
                    }
                }
            }
            .toList()
    }

    /**
     * Delete a configuration.
     *
     * @param configId Configuration UUID
     * @return true if deleted, false if not found
     */
    fun delete(configId: UUID): Boolean {
        val filePath = getFilePath(configId)
        return try {
            Files.deleteIfExists(filePath)
        } catch (e: Exception) {
            false
        }
    }

    /**
     * Check if a configuration exists.
     *
     * @param configId Configuration UUID
     * @return true if exists, false otherwise
     */
    fun exists(configId: UUID): Boolean {
        return Files.exists(getFilePath(configId))
    }

    /**
     * Get file path for a configuration ID.
     */
    private fun getFilePath(configId: UUID): Path {
        return storageDir.resolve("$configId.pb.gz")
    }

    /**
     * Convert SolveConfiguration to Protocol Buffers.
     */
    private fun toProtobuf(config: SolveConfiguration): SolveConfigurationPb {
        return SolveConfigurationPb.newBuilder()
            .setConfigId(config.configId.toString())
            .setName(config.name)
            .setNumPlayers(config.numPlayers)
            .putAllStackSizes(config.stackSizes.mapKeys { it.key.name })
            .setStartingPosition(config.startingPosition.name)
            .setConvergenceCriteria(toProtobuf(config.convergenceCriteria))
            .setBetSizingScheme(toProtobuf(config.betSizingScheme))
            .setHandAbstraction(toProtobuf(config.handAbstraction))
            .setCreatedAtEpochMillis(config.createdAt.toEpochMilli())
            .setUpdatedAtEpochMillis(config.updatedAt.toEpochMilli())
            .build()
    }

    /**
     * Convert Protocol Buffers to SolveConfiguration.
     */
    private fun fromProtobuf(pb: SolveConfigurationPb): SolveConfiguration {
        return SolveConfiguration(
            configId = UUID.fromString(pb.configId),
            name = pb.name,
            numPlayers = pb.numPlayers,
            stackSizes = pb.stackSizesMap.mapKeys { Position.valueOf(it.key) },
            startingPosition = Position.valueOf(pb.startingPosition),
            convergenceCriteria = fromProtobuf(pb.convergenceCriteria),
            betSizingScheme = fromProtobuf(pb.betSizingScheme),
            handAbstraction = fromProtobuf(pb.handAbstraction),
            createdAt = Instant.ofEpochMilli(pb.createdAtEpochMillis),
            updatedAt = Instant.ofEpochMilli(pb.updatedAtEpochMillis)
        )
    }

    /**
     * Convert ConvergenceCriteria to Protocol Buffers.
     */
    private fun toProtobuf(criteria: ConvergenceCriteria): ConvergenceCriteriaPb {
        val builder = ConvergenceCriteriaPb.newBuilder()
            .setTargetExploitability(criteria.targetExploitability)
            .setMaxIterations(criteria.maxIterations)
            .setEvaluationFrequency(criteria.evaluationFrequency)

        criteria.timeoutHours?.let { builder.setTimeoutHours(it) }

        return builder.build()
    }

    /**
     * Convert Protocol Buffers to ConvergenceCriteria.
     */
    private fun fromProtobuf(pb: ConvergenceCriteriaPb): ConvergenceCriteria {
        return ConvergenceCriteria(
            targetExploitability = pb.targetExploitability,
            maxIterations = pb.maxIterations,
            evaluationFrequency = pb.evaluationFrequency,
            timeoutHours = if (pb.hasTimeoutHours()) pb.timeoutHours else null
        )
    }

    /**
     * Convert BetSizingScheme to Protocol Buffers.
     */
    private fun toProtobuf(scheme: BetSizingScheme): BetSizingSchemePb {
        val sizes = scheme.sizes.map { betSize ->
            val builder = BetSizePb.newBuilder()
            when (betSize) {
                is BetSize.PotRelative -> builder.setPotRelative(betSize.multiplier)
                is BetSize.AllIn -> builder.setAllIn(true)
            }
            builder.build()
        }

        return BetSizingSchemePb.newBuilder()
            .addAllSizes(sizes)
            .build()
    }

    /**
     * Convert Protocol Buffers to BetSizingScheme.
     */
    private fun fromProtobuf(pb: BetSizingSchemePb): BetSizingScheme {
        val sizes = pb.sizesList.map { sizePb ->
            when (sizePb.sizeTypeCase) {
                BetSizePb.SizeTypeCase.POT_RELATIVE -> BetSize.PotRelative(sizePb.potRelative)
                BetSizePb.SizeTypeCase.ALL_IN -> BetSize.AllIn
                else -> BetSize.AllIn // Default fallback
            }
        }

        return BetSizingScheme(sizes)
    }

    /**
     * Convert HandAbstraction to Protocol Buffers.
     */
    private fun toProtobuf(abstraction: HandAbstraction): HandAbstractionPb {
        return HandAbstractionPb.newBuilder()
            .setMode(abstraction.mode.name)
            .setNumBuckets(abstraction.numBuckets)
            .setBucketingMethod(abstraction.bucketingMethod.name)
            .build()
    }

    /**
     * Convert Protocol Buffers to HandAbstraction.
     */
    private fun fromProtobuf(pb: HandAbstractionPb): HandAbstraction {
        return HandAbstraction(
            mode = try {
                AbstractionMode.valueOf(pb.mode)
            } catch (e: Exception) {
                AbstractionMode.AUTO
            },
            numBuckets = if (pb.numBuckets > 0) pb.numBuckets else 200,
            bucketingMethod = try {
                BucketingMethod.valueOf(pb.bucketingMethod)
            } catch (e: Exception) {
                BucketingMethod.EQUITY_HISTOGRAM
            }
        )
    }
}
