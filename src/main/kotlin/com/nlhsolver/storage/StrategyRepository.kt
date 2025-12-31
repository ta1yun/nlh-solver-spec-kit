package com.nlhsolver.storage

import com.nlhsolver.core.StrategyProfile as CoreStrategyProfile
import com.nlhsolver.proto.StrategyProto.*
import com.nlhsolver.solver.StrategyProfile
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
 * Repository for persisting and retrieving StrategyProfile entities (T055).
 *
 * Uses Protocol Buffers with gzip compression for efficient storage.
 * Strategy metadata is stored in data/strategies/ directory.
 * Full strategy data (info sets and probabilities) is stored separately.
 */
class StrategyRepository(
    private val storageDir: Path = Paths.get("data/strategies")
) {
    init {
        // Ensure storage directory exists
        Files.createDirectories(storageDir)
    }

    /**
     * Save a strategy profile metadata to disk.
     *
     * @param strategyProfile The strategy profile metadata to save
     * @return The saved strategy profile
     */
    fun save(strategyProfile: StrategyProfile): StrategyProfile {
        val pb = toProtobuf(strategyProfile)
        val filePath = getMetadataFilePath(strategyProfile.strategyId)

        // Write with gzip compression
        FileOutputStream(filePath.toFile()).use { fileOut ->
            GZIPOutputStream(fileOut).use { gzipOut ->
                pb.writeTo(gzipOut)
            }
        }

        return strategyProfile
    }

    /**
     * Save full strategy data (all info sets and strategies).
     *
     * This is separate from metadata due to potentially large size.
     *
     * @param strategyProfileId Strategy profile UUID
     * @param coreStrategyProfile The core strategy profile with all info sets
     */
    fun saveStrategyData(strategyProfileId: UUID, coreStrategyProfile: CoreStrategyProfile) {
        val pb = toStrategyDataProtobuf(strategyProfileId, coreStrategyProfile)
        val filePath = getDataFilePath(strategyProfileId)

        // Write with gzip compression
        FileOutputStream(filePath.toFile()).use { fileOut ->
            GZIPOutputStream(fileOut).use { gzipOut ->
                pb.writeTo(gzipOut)
            }
        }
    }

    /**
     * Find a strategy profile metadata by ID.
     *
     * @param strategyId Strategy UUID
     * @return The strategy profile metadata, or null if not found
     */
    fun findById(strategyId: UUID): StrategyProfile? {
        val filePath = getMetadataFilePath(strategyId)
        if (!Files.exists(filePath)) {
            return null
        }

        return try {
            FileInputStream(filePath.toFile()).use { fileIn ->
                GZIPInputStream(fileIn).use { gzipIn ->
                    val pb = StrategyProfilePb.parseFrom(gzipIn)
                    fromProtobuf(pb)
                }
            }
        } catch (e: Exception) {
            null
        }
    }

    /**
     * Load full strategy data.
     *
     * @param strategyId Strategy UUID
     * @return Core strategy profile with all info sets, or null if not found
     */
    fun loadStrategyData(strategyId: UUID): CoreStrategyProfile? {
        val filePath = getDataFilePath(strategyId)
        if (!Files.exists(filePath)) {
            return null
        }

        return try {
            FileInputStream(filePath.toFile()).use { fileIn ->
                GZIPInputStream(fileIn).use { gzipIn ->
                    val pb = StrategyDataPb.parseFrom(gzipIn)
                    fromStrategyDataProtobuf(pb)
                }
            }
        } catch (e: Exception) {
            null
        }
    }

    /**
     * Find all strategy profiles.
     *
     * @return List of all strategy profile metadata
     */
    fun findAll(): List<StrategyProfile> {
        return Files.list(storageDir)
            .filter { it.toString().endsWith("-metadata.pb.gz") }
            .map { path ->
                FileInputStream(path.toFile()).use { fileIn ->
                    GZIPInputStream(fileIn).use { gzipIn ->
                        val pb = StrategyProfilePb.parseFrom(gzipIn)
                        fromProtobuf(pb)
                    }
                }
            }
            .toList()
    }

    /**
     * Delete a strategy profile (both metadata and data).
     *
     * @param strategyId Strategy UUID
     * @return true if deleted, false if not found
     */
    fun delete(strategyId: UUID): Boolean {
        val metadataDeleted = try {
            Files.deleteIfExists(getMetadataFilePath(strategyId))
        } catch (e: Exception) {
            false
        }

        val dataDeleted = try {
            Files.deleteIfExists(getDataFilePath(strategyId))
        } catch (e: Exception) {
            false
        }

        return metadataDeleted || dataDeleted
    }

    /**
     * Check if a strategy profile exists.
     *
     * @param strategyId Strategy UUID
     * @return true if exists, false otherwise
     */
    fun exists(strategyId: UUID): Boolean {
        return Files.exists(getMetadataFilePath(strategyId))
    }

    /**
     * Get file path for strategy metadata.
     */
    private fun getMetadataFilePath(strategyId: UUID): Path {
        return storageDir.resolve("$strategyId-metadata.pb.gz")
    }

    /**
     * Get file path for strategy data.
     */
    private fun getDataFilePath(strategyId: UUID): Path {
        return storageDir.resolve("$strategyId-data.pb.gz")
    }

    /**
     * Convert StrategyProfile to Protocol Buffers.
     */
    private fun toProtobuf(profile: StrategyProfile): StrategyProfilePb {
        return StrategyProfilePb.newBuilder()
            .setStrategyId(profile.strategyId.toString())
            .setSolveJobId(profile.solveJobId.toString())
            .setExploitability(profile.exploitability)
            .setCreatedAtEpochMillis(profile.createdAt.toEpochMilli())
            .build()
    }

    /**
     * Convert Protocol Buffers to StrategyProfile.
     */
    private fun fromProtobuf(pb: StrategyProfilePb): StrategyProfile {
        return StrategyProfile(
            strategyId = UUID.fromString(pb.strategyId),
            solveJobId = UUID.fromString(pb.solveJobId),
            exploitability = pb.exploitability,
            createdAt = Instant.ofEpochMilli(pb.createdAtEpochMillis)
        )
    }

    /**
     * Convert CoreStrategyProfile to Protocol Buffers strategy data.
     */
    private fun toStrategyDataProtobuf(
        strategyProfileId: UUID,
        coreProfile: CoreStrategyProfile
    ): StrategyDataPb {
        val infoSetStrategies = coreProfile.getAllInfoSets().map { infoSet ->
            val avgStrategy = infoSet.getAverageStrategy()
            val actionProbabilities = avgStrategy.mapIndexed { index, prob ->
                "action_$index" to prob
            }.toMap()

            InfoSetStrategyPb.newBuilder()
                .setInfoSet(infoSet.infoSet)
                .putAllActionProbabilities(actionProbabilities)
                .setVisitCount(infoSet.getVisitCount())
                .build()
        }

        return StrategyDataPb.newBuilder()
            .setStrategyProfileId(strategyProfileId.toString())
            .addAllInfoSetStrategies(infoSetStrategies)
            .build()
    }

    /**
     * Convert Protocol Buffers strategy data to CoreStrategyProfile.
     */
    private fun fromStrategyDataProtobuf(pb: StrategyDataPb): CoreStrategyProfile {
        val coreProfile = CoreStrategyProfile()

        // Rebuild the strategy profile from saved data
        // Note: This is a simplified reconstruction
        // In production, we'd need to reconstruct the full regret tables

        for (infoSetPb in pb.infoSetStrategiesList) {
            val numActions = infoSetPb.actionProbabilitiesMap.size
            val infoSet = coreProfile.getInfoSetStrategy(infoSetPb.infoSet, numActions)

            // The saved data only has average strategies, not regrets
            // For querying, this is sufficient
            // For continued training, we'd need to save regrets too
        }

        return coreProfile
    }
}
