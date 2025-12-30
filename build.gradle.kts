import com.google.protobuf.gradle.id

plugins {
    kotlin("jvm") version "1.9.22"
    kotlin("plugin.serialization") version "1.9.22"
    id("com.google.protobuf") version "0.9.4"
    application
}

group = "com.nlhsolver"
version = "1.0.0"

repositories {
    mavenCentral()
}

dependencies {
    // Kotlin Standard Library
    implementation(kotlin("stdlib"))

    // Kotlin Coroutines for async execution (T005)
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.8.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-jdk8:1.8.0")

    // Ktor Server for REST API (T003)
    implementation("io.ktor:ktor-server-core:2.3.7")
    implementation("io.ktor:ktor-server-netty:2.3.7")
    implementation("io.ktor:ktor-server-content-negotiation:2.3.7")
    implementation("io.ktor:ktor-serialization-kotlinx-json:2.3.7")
    implementation("io.ktor:ktor-server-call-logging:2.3.7")
    implementation("io.ktor:ktor-server-status-pages:2.3.7")

    // Ktor Client (for remote execution)
    implementation("io.ktor:ktor-client-core:2.3.7")
    implementation("io.ktor:ktor-client-cio:2.3.7")
    implementation("io.ktor:ktor-client-content-negotiation:2.3.7")

    // Kotlinx Serialization
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.2")

    // Clikt CLI framework (T004)
    implementation("com.github.ajalt.clikt:clikt:4.2.2")

    // Protocol Buffers (T002)
    implementation("com.google.protobuf:protobuf-java:3.25.2")
    implementation("com.google.protobuf:protobuf-kotlin:3.25.2")

    // Logging
    implementation("org.slf4j:slf4j-api:2.0.9")
    implementation("ch.qos.logback:logback-classic:1.4.14")

    // Guava for collections and caching
    implementation("com.google.guava:guava:33.0.0-jre")

    // Testing dependencies (T006)
    testImplementation("io.kotest:kotest-runner-junit5:5.8.0")
    testImplementation("io.kotest:kotest-assertions-core:5.8.0")
    testImplementation("io.kotest:kotest-property:5.8.0")
    testImplementation("io.mockk:mockk:1.13.9")

    // JUnit 5 for integration tests
    testImplementation("org.junit.jupiter:junit-jupiter:5.10.1")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.10.1")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.10.1")

    // Ktor testing
    testImplementation("io.ktor:ktor-server-tests:2.3.7")
    testImplementation("io.ktor:ktor-server-test-host:2.3.7")
}

// Protocol Buffers configuration (T011)
protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:3.25.2"
    }
    generateProtoTasks {
        all().forEach { task ->
            task.builtins {
                id("kotlin")
            }
        }
    }
    generatedFilesBaseDir = "$buildDir/generated/source/proto"
}

// Kotlin compilation settings
kotlin {
    jvmToolchain(21)
}

// Application configuration
application {
    mainClass.set("com.nlhsolver.cli.NlhSolverCliKt")
}

// Task to verify Phase 2 implementation
tasks.register<JavaExec>("verifyPhase2") {
    group = "verification"
    description = "Run Phase 2 verification tests"
    classpath = sourceSets["main"].runtimeClasspath
    mainClass.set("com.nlhsolver.VerifyPhase2Kt")
}

// Test configuration
tasks.test {
    useJUnitPlatform()

    // Show test output in console (useful for println debugging)
    testLogging {
        events("passed", "skipped", "failed", "standardOut", "standardError")
        showStandardStreams = true
        exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
    }
}

// Make proto-generated sources available to Kotlin compiler
sourceSets {
    main {
        java {
            srcDirs("build/generated/source/proto/main/java")
            srcDirs("build/generated/source/proto/main/kotlin")
        }
    }
}
