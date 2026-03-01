package com.nlhsolver.storage

import com.nlhsolver.solver.BucketMapping
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import java.io.FileInputStream
import java.io.FileOutputStream
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.util.UUID
import java.util.zip.GZIPInputStream
import java.util.zip.GZIPOutputStream

/**
 * Repository for persisting and retrieving bucket mappings.
 *
 * Bucket mappings are stored alongside strategies to enable range extraction.
 */
class BucketMappingRepository(
    private val storageDir: Path = Paths.get("data/strategies")
) {
    private val json = Json {
        prettyPrint = true
        encodeDefaults = true
    }

    init {
        Files.createDirectories(storageDir)
    }

    /**
     * Save a bucket mapping to disk.
     */
    fun save(mapping: BucketMapping): BucketMapping {
        val strategyId = UUID.fromString(mapping.strategyId)
        val filePath = getMappingFilePath(strategyId)

        val jsonString = json.encodeToString(mapping)

        FileOutputStream(filePath.toFile()).use { fileOut ->
            GZIPOutputStream(fileOut).use { gzipOut ->
                gzipOut.write(jsonString.toByteArray(Charsets.UTF_8))
            }
        }

        return mapping
    }

    /**
     * Load a bucket mapping by strategy ID.
     */
    fun findById(strategyId: UUID): BucketMapping? {
        val filePath = getMappingFilePath(strategyId)
        if (!Files.exists(filePath)) {
            return null
        }

        return try {
            FileInputStream(filePath.toFile()).use { fileIn ->
                GZIPInputStream(fileIn).use { gzipIn ->
                    val jsonString = gzipIn.readBytes().toString(Charsets.UTF_8)
                    json.decodeFromString<BucketMapping>(jsonString)
                }
            }
        } catch (e: Exception) {
            null
        }
    }

    /**
     * Delete a bucket mapping.
     */
    fun delete(strategyId: UUID): Boolean {
        val filePath = getMappingFilePath(strategyId)
        return if (Files.exists(filePath)) {
            Files.delete(filePath)
            true
        } else {
            false
        }
    }

    private fun getMappingFilePath(strategyId: UUID): Path {
        return storageDir.resolve("$strategyId-bucket-mapping.json.gz")
    }
}
