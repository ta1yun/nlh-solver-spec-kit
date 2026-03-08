# GCP Quick Start - 5 Minute Setup

Simpler than AWS, no permission issues, slightly cheaper.

## Step 1: Install gcloud CLI (1 minute)

```bash
# macOS
brew install google-cloud-sdk

# Or download from: https://cloud.google.com/sdk/docs/install

# Verify
gcloud --version
```

## Step 2: Authenticate (1 minute)

```bash
# Opens browser for authentication
gcloud auth login

# Click your Google account
# Click "Allow" to grant permissions
# Close browser tab when it says "You are now authenticated"
```

## Step 3: Create or Select Project (2 minutes)

**Option A: Create new project**
1. Go to: https://console.cloud.google.com/projectcreate
2. Project name: `nlh-solver`
3. Click "Create"
4. Wait ~30 seconds
5. Set as active project:
   ```bash
   gcloud config set project nlh-solver
   ```

**Option B: Use existing project**
```bash
# List projects
gcloud projects list

# Set active project
gcloud config set project YOUR_PROJECT_ID
```

## Step 4: Enable Compute Engine API (30 seconds)

First time only:
```bash
gcloud services enable compute.googleapis.com

# Or enable in browser:
# https://console.cloud.google.com/apis/library/compute.googleapis.com
```

## Step 5: Deploy Instance (1 minute setup + 3 min wait)

```bash
cd deploy/gcp

# Make script executable
chmod +x deploy.sh

# Deploy (no keypair needed!)
# Hard cap: instance auto-deletes after 3 hours (~$2 max spend)
./deploy.sh create nlh-solver

# To override the runtime cap (e.g. 4 hours):
# GCP_MAX_RUN_DURATION=14400s ./deploy.sh create nlh-solver

# Wait ~3 minutes...
# ✓ Instance created!
```

## Step 6: Get Code on Instance

**Option 1: Push to GitHub (recommended)**
```bash
# Create repo: https://github.com/new
# Repository name: nlh-solver-spec-kit

# Add remote and push
cd /Users/tpai/Projects/nlh-solver-spec-kit
git remote add origin https://github.com/YOUR_USERNAME/nlh-solver-spec-kit.git
git push -u origin 001-nlh-poker-solver

# SSH into instance
gcloud compute ssh nlh-solver --zone=us-central1-a

# Clone and build
git clone https://github.com/YOUR_USERNAME/nlh-solver-spec-kit.git
cd nlh-solver-spec-kit
./gradlew build
```

**Option 2: Copy files directly (faster, no GitHub)**
```bash
# From project root
cd /Users/tpai/Projects/nlh-solver-spec-kit

# Create tarball
tar czf nlh-solver.tar.gz --exclude='.git' --exclude='build' --exclude='.gradle' .

# Copy to instance (replaces scp, no keypair needed!)
gcloud compute scp nlh-solver.tar.gz nlh-solver:~/ --zone=us-central1-a

# SSH in
gcloud compute ssh nlh-solver --zone=us-central1-a

# Extract and build
tar xzf nlh-solver.tar.gz
./gradlew build
```

## Step 7: Run Blueprint Solve

```bash
# Inside GCP instance (after SSH)
cd nlh-solver-spec-kit

# Start solve in tmux
./run-blueprint-solve.sh start

# Detach: Ctrl+B, then D
# Exit: type 'exit'
```

## Step 8: Monitor Progress

```bash
# Reconnect anytime
gcloud compute ssh nlh-solver --zone=us-central1-a

# Attach to tmux
./run-blueprint-solve.sh attach

# Or just tail logs
./run-blueprint-solve.sh logs
```

## Step 9: Download Results (After 1-2 hours)

```bash
# Download strategy files
gcloud compute scp nlh-solver:~/nlh-solver-spec-kit/data/strategies/*.pb.gz ./results/ \
  --zone=us-central1-a --recurse

# Download blueprint config
gcloud compute scp nlh-solver:~/nlh-solver-spec-kit/data/blueprints/*.json ./results/ \
  --zone=us-central1-a --recurse
```

## Step 10: Cleanup

**IMPORTANT:** Delete when done to avoid charges!

```bash
cd deploy/gcp
./deploy.sh delete nlh-solver
```

## Cost: ~$1.30 for 2-hour solve

- Instance (n2-highcpu-16): $0.65/hr × 2 hours = **$1.30**
- Disk (50GB): $0.008/hr × 2 hours = **$0.02**
- **Total: ~$1.32**

## Troubleshooting

### "gcloud: command not found"
```bash
# Restart terminal after installation
# Or add to PATH:
source ~/google-cloud-sdk/path.bash.inc
```

### "API not enabled"
```bash
gcloud services enable compute.googleapis.com
```

### "Project not found"
```bash
# List available projects
gcloud projects list

# Create new project
gcloud projects create nlh-solver --name="NLH Solver"
gcloud config set project nlh-solver
```

### "Permission denied"
```bash
# Make sure you're authenticated
gcloud auth login

# Check current account
gcloud auth list
```

### Check instance status
```bash
cd deploy/gcp
./deploy.sh status nlh-solver
```

## Advantages Over AWS

1. **No keypair management** - uses your Google account SSH keys automatically
2. **Browser authentication** - no access keys to manage
3. **Simpler commands** - `gcloud compute ssh` vs `ssh -i key.pem user@ip`
4. **Better defaults** - most permissions work out of the box
5. **Slightly cheaper** - $0.65/hr vs $0.68/hr
6. **Free tier** - $300 credit for new accounts

## Complete Command Summary

```bash
# One-time setup (5 min)
brew install google-cloud-sdk
gcloud auth login
gcloud config set project nlh-solver
gcloud services enable compute.googleapis.com

# Deploy (3 min wait)
cd deploy/gcp
./deploy.sh create nlh-solver

# Copy code (Option 2 - fastest)
cd ../..
tar czf nlh-solver.tar.gz --exclude='.git' --exclude='build' .
gcloud compute scp nlh-solver.tar.gz nlh-solver:~/ --zone=us-central1-a

# SSH and setup
gcloud compute ssh nlh-solver --zone=us-central1-a
tar xzf nlh-solver.tar.gz
./gradlew build

# Run solve
./run-blueprint-solve.sh start
# Ctrl+B, D to detach
# exit to close SSH

# Monitor later
gcloud compute ssh nlh-solver --zone=us-central1-a
./run-blueprint-solve.sh attach

# Download results
gcloud compute scp nlh-solver:~/nlh-solver-spec-kit/data/strategies/*.pb.gz ./results/ --zone=us-central1-a --recurse

# Cleanup
cd deploy/gcp
./deploy.sh delete nlh-solver
```

## Tips & Best Practices

### Testing Before Full Solve

Test with limited matchups first (faster, cheaper):

```bash
# Test with 10 hands (~5 min)
export NLH_MAX_MATCHUPS=10
./run-blueprint-solve.sh start

# Or test with 100 hands (~30 min)
export NLH_MAX_MATCHUPS=100
./run-blueprint-solve.sh start

# Full solve with all 1,326 hands (2-4 hours)
unset NLH_MAX_MATCHUPS
./run-blueprint-solve.sh start
```

### Monitoring Solve Progress

Check if solve is working (not hung):

```bash
# Check CPU usage (should be 90-100% during solve)
top -bn1 | grep java

# Monitor logs in real-time
./run-blueprint-solve.sh logs

# Check tmux session status
./run-blueprint-solve.sh status
```

**Initialization phase:** Silent for 5-20 minutes while building game states. Watch CPU - if it's at 100%, it's working!

### Inspecting Solved Strategies

```bash
# List all strategies
./gradlew run --args="strategy list"

# Inspect info sets in a strategy
./gradlew run --args="strategy inspect <strategy-id>"

# Decode preflop bucket IDs to hands
./gradlew run --args="strategy decode-bucket --buckets 165,134,143"

# Extract BTN opening range
./gradlew run --args="strategy extract-range <strategy-id> <blueprint-id>"
```

### Building on Instance

```bash
# Build without running tests (much faster)
./gradlew build -x test

# If build hangs, check memory
free -h

# If Gradle daemon issues
./gradlew --stop
```

### Common Issues

**Build fails with Java version error:**
```bash
# Check Java version (needs 21)
java -version

# Install if missing (already in startup script)
sudo apt-get install -y openjdk-21-jdk
```

**Gradle wrapper missing:**
```bash
# Regenerate wrapper
gradle wrapper --gradle-version 8.5
```

**Instance auto-deleted:**
- Instances auto-delete after 3 hours (hard cap)
- Data is preserved on disk (auto-delete=no)
- Recreate instance and attach old disk to recover results

**Strategy file exists but no ranges:**
- For test solves (NLH_MAX_MATCHUPS < 1326), most hands won't be solved
- Run full solve to get complete ranges

## Next Steps

See `CLOUD_DEPLOYMENT.md` for advanced options (spot instances, monitoring, etc.)
