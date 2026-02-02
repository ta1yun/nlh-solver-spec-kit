# Cloud Deployment Guide

Run blueprint solves on cloud infrastructure - avoid local resource constraints and laptop closure issues.

## Quick Comparison

| Provider | Recommended Instance | Cost/Hour | Setup Time | Best For |
|----------|---------------------|-----------|------------|----------|
| **AWS** | c6i.4xlarge (16 vCPU, 32GB) | ~$0.68 | 5 min | Production, mature ecosystem |
| **GCP** | n2-highcpu-16 (16 vCPU, 16GB) | ~$0.65 | 3 min | Fastest setup, best pricing |
| **Azure** | F16s_v2 (16 vCPU, 32GB) | ~$0.67 | 5 min | Enterprise, Microsoft stack |
| **DigitalOcean** | CPU-Optimized 16 vCPU | ~$0.71 | 2 min | Simplest UX, good for testing |

**Recommendation:** GCP for quickest setup, AWS for production scale.

---

## Option 1: Google Cloud Platform (Recommended)

### Prerequisites
```bash
# Install gcloud CLI
# https://cloud.google.com/sdk/docs/install

# Authenticate
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

### Deploy (5 minutes)

```bash
cd deploy/gcp
chmod +x deploy.sh

# Create instance
./deploy.sh create nlh-solver

# Wait 2-3 minutes for deployment...

# SSH in
./deploy.sh ssh nlh-solver
```

### Run Blueprint Solve

```bash
# Inside the instance
cd nlh-solver-spec-kit
./run-blueprint-solve.sh start

# Detach: Ctrl+B, then D
# Exit SSH - solve continues running!
```

### Monitor Progress

```bash
# Reconnect anytime
./deploy.sh ssh nlh-solver

# Attach to tmux
./run-blueprint-solve.sh attach

# Or tail logs
./run-blueprint-solve.sh logs
```

### Download Results

```bash
# From your local machine
gcloud compute scp nlh-solver:~/nlh-solver-spec-kit/data/strategies/*.pb.gz ./results/ --zone=us-central1-a --recurse
```

### Cleanup

```bash
./deploy.sh delete nlh-solver
```

**Estimated Cost:** ~$1-2 for a 2-hour solve

---

## Option 2: AWS (Production-Ready)

### Prerequisites

```bash
# Install AWS CLI
# https://aws.amazon.com/cli/

# Configure credentials
aws configure
```

### Deploy via CloudFormation

```bash
cd deploy/aws

# Create key pair (if needed)
aws ec2 create-key-pair --key-name nlh-solver-key --query 'KeyMaterial' --output text > nlh-solver-key.pem
chmod 400 nlh-solver-key.pem

# Deploy stack
aws cloudformation create-stack \
  --stack-name nlh-solver \
  --template-body file://cloudformation.yml \
  --parameters \
    ParameterKey=KeyName,ParameterValue=nlh-solver-key \
    ParameterKey=InstanceType,ParameterValue=c6i.4xlarge \
  --capabilities CAPABILITY_IAM

# Wait for completion (5-10 minutes)
aws cloudformation wait stack-create-complete --stack-name nlh-solver

# Get instance IP
aws cloudformation describe-stacks --stack-name nlh-solver --query 'Stacks[0].Outputs[?OutputKey==`PublicIP`].OutputValue' --output text
```

### SSH and Run

```bash
# SSH
PUBLIC_IP=$(aws cloudformation describe-stacks --stack-name nlh-solver --query 'Stacks[0].Outputs[?OutputKey==`PublicIP`].OutputValue' --output text)
ssh -i nlh-solver-key.pem ec2-user@$PUBLIC_IP

# Run solve
cd nlh-solver-spec-kit
./run-blueprint-solve.sh start
```

### Download Results

```bash
scp -i nlh-solver-key.pem -r ec2-user@$PUBLIC_IP:~/nlh-solver-spec-kit/data/strategies/ ./results/
```

### Cleanup

```bash
aws cloudformation delete-stack --stack-name nlh-solver
```

---

## Option 3: DigitalOcean (Simplest)

### Via Web Console

1. Create Droplet:
   - Image: Docker on Ubuntu 22.04
   - Plan: CPU-Optimized, 16 vCPU, 32GB RAM ($0.71/hr)
   - Region: Choose closest
   - SSH Key: Add your public key

2. SSH in:
```bash
ssh root@YOUR_DROPLET_IP

# Clone and run
git clone https://github.com/yourusername/nlh-solver-spec-kit.git
cd nlh-solver-spec-kit
docker-compose build
./run-blueprint-solve.sh start
```

---

## Option 4: Local Docker (Testing)

For shorter solves or testing:

```bash
# Build and run locally
docker-compose up -d api

# Run blueprint solve
docker exec -it nlh-solver-api /app/bin/nlhsolver
# Inside container:
cd /app
./gradlew runProductionBlueprint
```

**Note:** Not recommended for 1-2 hour solves on a laptop.

---

## Cost Optimization

### 1. Use Spot/Preemptible Instances

**AWS Spot Instances:** ~70% cheaper
```bash
# Modify CloudFormation to use Spot
InstanceMarketOptions:
  MarketType: spot
  SpotOptions:
    MaxPrice: "0.25"  # Max bid price
    SpotInstanceType: one-time
```

**GCP Preemptible VMs:** ~80% cheaper
```bash
gcloud compute instances create nlh-solver \
  --preemptible \
  --maintenance-policy=TERMINATE \
  # ... other flags
```

**Risk:** Instance can be terminated anytime (rare for <24hr jobs)

### 2. Stop (Don't Delete) When Done

Keep disk, delete compute:
```bash
# AWS
aws ec2 stop-instances --instance-ids i-xxxxx

# GCP
gcloud compute instances stop nlh-solver
```

Resume later:
```bash
# AWS
aws ec2 start-instances --instance-ids i-xxxxx

# GCP
gcloud compute instances start nlh-solver
```

Storage cost: ~$5/month for 50GB

### 3. Auto-Shutdown

Add to UserData/startup script:
```bash
# Shutdown after 3 hours (safety net)
echo "sudo shutdown -h +180" | at now
```

---

## Monitoring

### Health Check
```bash
curl http://INSTANCE_IP:8080/api/v1/health
```

### CloudWatch/Monitoring

**AWS:**
```bash
# View CPU metrics
aws cloudwatch get-metric-statistics \
  --namespace AWS/EC2 \
  --metric-name CPUUtilization \
  --dimensions Name=InstanceId,Value=i-xxxxx \
  --start-time 2025-01-01T00:00:00Z \
  --end-time 2025-01-01T01:00:00Z \
  --period 300 \
  --statistics Average
```

**GCP:**
```bash
# View instance monitoring
gcloud compute instances describe nlh-solver --zone=us-central1-a
```

### Progress via API

```bash
# Submit job via API
curl -X POST http://INSTANCE_IP:8080/api/v1/jobs \
  -H "Content-Type: application/json" \
  -d @config.json

# Poll status
curl http://INSTANCE_IP:8080/api/v1/jobs/{job-id}
```

---

## Troubleshooting

### Instance Not Responding
```bash
# Check instance status
gcloud compute instances describe nlh-solver

# View serial console logs
gcloud compute instances get-serial-port-output nlh-solver
```

### Out of Memory
```bash
# Upgrade instance type
# GCP:
gcloud compute instances set-machine-type nlh-solver \
  --machine-type n2-highmem-16 \
  --zone us-central1-a
```

### Slow Solve
```bash
# SSH in and check CPU
top

# Check iteration speed in logs
tail -f logs/nlhsolver.log | grep "Iter/sec"
```

---

## Best Practices

1. **Always use tmux/screen** - Survive SSH disconnections
2. **Set auto-shutdown** - Avoid forgetting and high bills
3. **Use monitoring alarms** - Get notified when complete
4. **Backup results immediately** - Download to S3/Cloud Storage
5. **Tag resources** - Easy cost tracking and cleanup

---

## Example: Complete AWS Workflow

```bash
# 1. Deploy
cd deploy/aws
aws cloudformation create-stack --stack-name nlh-solver \
  --template-body file://cloudformation.yml \
  --parameters ParameterKey=KeyName,ParameterValue=my-key

# 2. Get IP
PUBLIC_IP=$(aws cloudformation describe-stacks --stack-name nlh-solver \
  --query 'Stacks[0].Outputs[?OutputKey==`PublicIP`].OutputValue' --output text)

# 3. SSH and start solve
ssh -i my-key.pem ec2-user@$PUBLIC_IP
cd nlh-solver-spec-kit
./run-blueprint-solve.sh start
# Ctrl+B, D to detach
exit

# 4. Check later (2 hours)
ssh -i my-key.pem ec2-user@$PUBLIC_IP
./run-blueprint-solve.sh attach
# Check if complete

# 5. Download results
scp -i my-key.pem -r ec2-user@$PUBLIC_IP:~/nlh-solver-spec-kit/data/ ./

# 6. Cleanup
aws cloudformation delete-stack --stack-name nlh-solver
```

**Total Cost:** ~$1.36 (2 hours × $0.68/hr)

---

## Next Steps After Solve

1. **Analyze Results Locally:**
```bash
# Extract ranges
./gradlew run --args="blueprint show <blueprint-id>"

# Measure EV loss
./gradlew run --args="blueprint analyze-ev-loss <blueprint-id>"
```

2. **Run Refinement Solves:**
```bash
# Specific board with blueprint ranges
./gradlew run --args="refine solve <blueprint-id> --board KsQh7d"
```

3. **Generate Range Library:**
   - 50bb short stack
   - 200bb deep stack
   - With antes
   - Multiple positions

4. **Export for PioSOLVER/GTO+:**
   - Convert to industry-standard formats
   - Compare vs existing solutions
   - Create training materials
