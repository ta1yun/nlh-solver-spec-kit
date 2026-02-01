# Multi-stage Dockerfile for NLH Solver (T123)
#
# Build: docker build -t nlh-solver:latest .
# Run API: docker run -p 8080:8080 -v $(pwd)/data:/app/data nlh-solver:latest api
# Run CLI: docker run -it -v $(pwd)/data:/app/data nlh-solver:latest cli --help

# Stage 1: Build
FROM gradle:8.5-jdk21 AS builder

WORKDIR /build

# Copy gradle files first for better layer caching
COPY build.gradle.kts settings.gradle.kts gradle.properties ./
COPY gradle ./gradle

# Download dependencies (cached if gradle files haven't changed)
RUN gradle dependencies --no-daemon || true

# Copy source code
COPY src ./src

# Build the application
RUN gradle installDist --no-daemon

# Stage 2: Runtime
FROM eclipse-temurin:21-jre-jammy

LABEL maintainer="nlh-solver"
LABEL description="No-Limit Hold'em Poker Solver - CFR+ based Nash equilibrium solver"

WORKDIR /app

# Install utilities
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Copy built application from builder
COPY --from=builder /build/build/install/nlh-solver-spec-kit ./

# Create data directory for strategies and logs
RUN mkdir -p /app/data /app/logs && \
    chmod 755 /app/data /app/logs

# Set up volumes for persistence
VOLUME ["/app/data", "/app/logs"]

# Expose API port
EXPOSE 8080

# Health check for API mode
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:8080/api/v1/health || exit 1

# Environment variables
ENV JAVA_OPTS="-Xmx8g -Xms2g -XX:+UseG1GC -XX:MaxGCPauseMillis=200"
ENV DATA_DIR="/app/data"
ENV LOG_DIR="/app/logs"

# Create wrapper script to handle different run modes
RUN echo '#!/bin/bash\n\
set -e\n\
\n\
MODE="${1:-api}"\n\
\n\
if [ "$MODE" = "api" ]; then\n\
    echo "Starting NLH Solver API server..."\n\
    exec java $JAVA_OPTS -jar lib/*.jar\n\
elif [ "$MODE" = "cli" ]; then\n\
    shift\n\
    echo "Running NLH Solver CLI..."\n\
    exec bin/nlhsolver "$@"\n\
else\n\
    echo "Unknown mode: $MODE"\n\
    echo "Usage: docker run nlh-solver [api|cli] [args...]"\n\
    exit 1\n\
fi\n' > /app/entrypoint.sh && chmod +x /app/entrypoint.sh

# Default to API mode
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["api"]
