package com.nlhsolver.common

/**
 * Memory monitoring and OOM prevention for resource-intensive operations (T115).
 *
 * Provides utilities to:
 * - Check available memory before starting solves
 * - Prevent OOM by failing fast with graceful error messages
 * - Monitor memory usage during execution
 */
object MemoryGuard {

    /**
     * Minimum percentage of heap that must be free before starting a solve.
     * Default is 20% to leave room for GC and temporary objects.
     */
    private const val MIN_FREE_PERCENT = 20.0

    /**
     * Check if there is sufficient memory to start a solve operation.
     *
     * @param requiredMB Estimated memory required in MB (optional)
     * @throws OutOfMemoryException if insufficient memory available
     */
    fun checkSufficientMemory(requiredMB: Long? = null) {
        // Skip memory checks in test mode
        val isTestMode = System.getenv("NLH_TEST_MODE")?.toBoolean() == true ||
                         System.getProperty("NLH_TEST_MODE")?.toBoolean() == true
        if (isTestMode) {
            return
        }

        val runtime = Runtime.getRuntime()
        val maxMemory = runtime.maxMemory()
        val totalMemory = runtime.totalMemory()
        val freeMemory = runtime.freeMemory()

        // Calculate available memory (max - already allocated + free in allocated)
        val usedMemory = totalMemory - freeMemory
        val availableMemory = maxMemory - usedMemory
        val availableMB = availableMemory / (1024 * 1024)
        val maxMB = maxMemory / (1024 * 1024)

        // Calculate free percentage
        val freePercent = (availableMemory.toDouble() / maxMemory.toDouble()) * 100.0

        // Check if we have enough free memory as a percentage
        if (freePercent < MIN_FREE_PERCENT) {
            throw OutOfMemoryException(
                "Insufficient memory to start solve: ${availableMB}MB available (${String.format("%.1f", freePercent)}% free), " +
                "need at least ${String.format("%.1f", MIN_FREE_PERCENT)}% free. " +
                "Max heap: ${maxMB}MB. Consider increasing heap with -Xmx or reducing abstraction complexity."
            )
        }

        // If specific requirement provided, check it too
        if (requiredMB != null && availableMB < requiredMB) {
            throw OutOfMemoryException(
                "Insufficient memory to start solve: ${availableMB}MB available, ${requiredMB}MB required. " +
                "Max heap: ${maxMB}MB. Consider increasing heap with -Xmx."
            )
        }
    }

    /**
     * Estimate memory required for a solve based on abstraction settings.
     *
     * This is a rough heuristic:
     * - No abstraction (full game tree): ~2GB minimum for production
     * - Equity bucketing: scales with number of buckets
     *   - 8 buckets: ~500MB
     *   - 15 buckets: ~800MB
     *   - 50 buckets: ~1500MB
     *   - 200+ buckets: ~2GB+
     *
     * Note: Test scenarios with small ranges may need much less memory.
     * Set NLH_TEST_MODE=true environment variable to reduce estimates for testing.
     *
     * @param numBuckets Number of buckets for abstraction, or null for no abstraction
     * @return Estimated memory required in MB
     */
    fun estimateMemoryRequired(numBuckets: Int?): Long {
        // In test mode, reduce memory requirements significantly
        val isTestMode = System.getenv("NLH_TEST_MODE")?.toBoolean() == true ||
                         System.getProperty("NLH_TEST_MODE")?.toBoolean() == true

        return when {
            numBuckets == null -> if (isTestMode) 256 else 2048  // Full game tree (or test scenario)
            numBuckets <= 10 -> 500
            numBuckets <= 20 -> 800
            numBuckets <= 100 -> 1500
            else -> 2048
        }
    }

    /**
     * Get current memory statistics as a formatted string.
     * Useful for logging and diagnostics.
     */
    fun getMemoryStats(): String {
        val runtime = Runtime.getRuntime()
        val maxMemory = runtime.maxMemory()
        val totalMemory = runtime.totalMemory()
        val freeMemory = runtime.freeMemory()
        val usedMemory = totalMemory - freeMemory
        val availableMemory = maxMemory - usedMemory

        val usedMB = usedMemory / (1024 * 1024)
        val availableMB = availableMemory / (1024 * 1024)
        val maxMB = maxMemory / (1024 * 1024)
        val usagePercent = (usedMemory.toDouble() / maxMemory.toDouble()) * 100.0

        return "Memory: ${usedMB}MB used / ${maxMB}MB max (${String.format("%.1f", usagePercent)}% used, ${availableMB}MB available)"
    }

    /**
     * Run a garbage collection and return freed memory in MB.
     * Use sparingly as GC is expensive.
     */
    fun forceGCAndGetFreedMemory(): Long {
        val runtime = Runtime.getRuntime()
        val usedBefore = runtime.totalMemory() - runtime.freeMemory()

        System.gc()
        Thread.sleep(100)  // Give GC time to complete

        val usedAfter = runtime.totalMemory() - runtime.freeMemory()
        val freed = usedBefore - usedAfter

        return freed / (1024 * 1024)
    }
}
