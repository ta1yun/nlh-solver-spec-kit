package com.nlhsolver.solver

/**
 * Contains error information for failed solve jobs (T029 - part of SolveJob).
 *
 * This entity provides diagnostic information when a solve fails,
 * including error codes, messages, stack traces, and retry guidance.
 *
 * @property errorCode Standardized error code (uppercase snake_case)
 * @property message Human-readable error message
 * @property stackTrace Optional stack trace for debugging
 * @property isRetriable Whether the error is retriable
 */
data class ErrorInfo(
    val errorCode: String,
    val message: String,
    val stackTrace: String? = null,
    val isRetriable: Boolean = false
) {
    init {
        require(errorCode.length <= 50) {
            "Error code must be at most 50 characters"
        }
        require(errorCode.matches(Regex("[A-Z_]+"))) {
            "Error code must be uppercase snake_case"
        }
        require(message.length <= 500) {
            "Error message must be at most 500 characters"
        }
        stackTrace?.let {
            require(it.length <= 10_000) {
                "Stack trace must be at most 10,000 characters"
            }
        }
    }

    companion object {
        /** JVM heap exhausted */
        const val OUT_OF_MEMORY = "OUT_OF_MEMORY"

        /** Configuration validation failed */
        const val INVALID_CONFIGURATION = "INVALID_CONFIGURATION"

        /** Error during CFR+ iteration */
        const val COMPUTATION_ERROR = "COMPUTATION_ERROR"

        /** Failed to persist results */
        const val STORAGE_ERROR = "STORAGE_ERROR"

        /** Lost connection to remote executor */
        const val REMOTE_CONNECTION_ERROR = "REMOTE_CONNECTION_ERROR"

        /** User-initiated cancellation */
        const val CANCELLED_BY_USER = "CANCELLED_BY_USER"

        /**
         * Creates an OUT_OF_MEMORY error.
         */
        fun outOfMemory(message: String, stackTrace: String? = null): ErrorInfo {
            return ErrorInfo(
                errorCode = OUT_OF_MEMORY,
                message = message,
                stackTrace = stackTrace,
                isRetriable = false
            )
        }

        /**
         * Creates an INVALID_CONFIGURATION error.
         */
        fun invalidConfiguration(message: String): ErrorInfo {
            return ErrorInfo(
                errorCode = INVALID_CONFIGURATION,
                message = message,
                stackTrace = null,
                isRetriable = false
            )
        }

        /**
         * Creates a COMPUTATION_ERROR.
         */
        fun computationError(message: String, stackTrace: String? = null): ErrorInfo {
            return ErrorInfo(
                errorCode = COMPUTATION_ERROR,
                message = message,
                stackTrace = stackTrace,
                isRetriable = true
            )
        }

        /**
         * Creates a STORAGE_ERROR.
         */
        fun storageError(message: String, stackTrace: String? = null): ErrorInfo {
            return ErrorInfo(
                errorCode = STORAGE_ERROR,
                message = message,
                stackTrace = stackTrace,
                isRetriable = true
            )
        }

        /**
         * Creates a REMOTE_CONNECTION_ERROR.
         */
        fun remoteConnectionError(message: String): ErrorInfo {
            return ErrorInfo(
                errorCode = REMOTE_CONNECTION_ERROR,
                message = message,
                stackTrace = null,
                isRetriable = true
            )
        }

        /**
         * Creates a CANCELLED_BY_USER error.
         */
        fun cancelledByUser(): ErrorInfo {
            return ErrorInfo(
                errorCode = CANCELLED_BY_USER,
                message = "Job was cancelled by user",
                stackTrace = null,
                isRetriable = false
            )
        }
    }
}
