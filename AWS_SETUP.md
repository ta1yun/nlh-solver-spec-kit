# AWS Setup Guide - NLH Solver

Complete step-by-step guide to run the blueprint solve on AWS.

## Prerequisites (One-Time Setup)

### Step 1: Install AWS CLI

**macOS:**
```bash
brew install awscli
```

**Linux:**
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

**Verify installation:**
```bash
aws --version
# Should output: aws-cli/2.x.x ...
```

### Step 2: Get AWS Credentials

1. Go to https://console.aws.amazon.com/
2. Sign up or log in
3. Navigate to: **IAM → Users → [Your Username] → Security credentials**
4. Click **"Create access key"**
5. Choose **"Command Line Interface (CLI)"**
6. Copy the **Access Key ID** and **Secret Access Key**

### Step 3: Configure AWS CLI

```bash
aws configure
```

You'll be prompted for:
```
AWS Access Key ID: [paste from step 2]
AWS Secret Access Key: [paste from step 2]
Default region name: us-east-1
Default output format: json
```

**Verify configuration:**
```bash
aws sts get-caller-identity
# Should output your account info
```

### Step 4: Create EC2 KeyPair

```bash
cd deploy/aws

# Create new keypair
aws ec2 create-key-pair \
  --key-name nlh-solver-key \
  --query 'KeyMaterial' \
  --output text > nlh-solver-key.pem

# Set proper permissions (IMPORTANT!)
chmod 400 nlh-solver-key.pem

# Verify
ls -lh nlh-solver-key.pem
# Should show: -r--------  1 user  group  1.7K ... nlh-solver-key.pem
```

## Deployment (Each Time You Run a Solve)

### Option A: Quick Deploy (Recommended for First Time)

```bash
cd deploy/aws
./deploy.sh create nlh-solver nlh-solver-key
```

This will:
- ✓ Check prerequisites
- ✓ Create EC2 instance (c6i.4xlarge - 16 vCPU, 32GB RAM)
- ✓ Set up security groups
- ✓ Allocate Elastic IP
- ✓ Wait for completion (~5-10 min)
- ✓ Display SSH command and next steps

### Option B: Manual CloudFormation

```bash
cd deploy/aws

# Get your public IP for SSH access
MY_IP=$(curl -s https://checkip.amazonaws.com)

# Deploy stack
aws cloudformation create-stack \
  --stack-name nlh-solver \
  --template-body file://cloudformation.yml \
  --parameters \
    ParameterKey=KeyName,ParameterValue=nlh-solver-key \
    ParameterKey=InstanceType,ParameterValue=c6i.4xlarge \
    ParameterKey=AllowedSSHCIDR,ParameterValue="${MY_IP}/32" \
  --capabilities CAPABILITY_IAM

# Wait for completion
aws cloudformation wait stack-create-complete --stack-name nlh-solver

# Get instance IP
aws cloudformation describe-stacks --stack-name nlh-solver \
  --query 'Stacks[0].Outputs[?OutputKey==`PublicIP`].OutputValue' \
  --output text
```

## Get Code onto Instance

After deployment, you need to get the nlh-solver code onto the instance.

### Option 1: Push to GitHub (Recommended)

```bash
# 1. Create GitHub repository
#    Go to: https://github.com/new
#    Repository name: nlh-solver-spec-kit
#    Create repository

# 2. Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/nlh-solver-spec-kit.git
git push -u origin 001-nlh-poker-solver

# 3. SSH into instance
./deploy.sh ssh nlh-solver nlh-solver-key

# 4. Clone and build
git clone https://github.com/YOUR_USERNAME/nlh-solver-spec-kit.git
cd nlh-solver-spec-kit
./gradlew build
```

### Option 2: Copy Files with SCP (Quick, No GitHub Needed)

```bash
# 1. Get instance IP
PUBLIC_IP=$(aws cloudformation describe-stacks --stack-name nlh-solver \
  --query 'Stacks[0].Outputs[?OutputKey==`PublicIP`].OutputValue' --output text)

# 2. Create tarball (from project root)
cd /Users/tpai/Projects/nlh-solver-spec-kit
tar czf nlh-solver.tar.gz \
  --exclude='.git' \
  --exclude='build' \
  --exclude='.gradle' \
  .

# 3. Copy to instance
scp -i deploy/aws/nlh-solver-key.pem nlh-solver.tar.gz ec2-user@$PUBLIC_IP:~/

# 4. SSH in
ssh -i deploy/aws/nlh-solver-key.pem ec2-user@$PUBLIC_IP

# 5. Extract and build
tar xzf nlh-solver.tar.gz
./gradlew build
```

## Run Blueprint Solve

Once code is on the instance:

```bash
# Inside the EC2 instance (after SSH)
cd nlh-solver-spec-kit

# Start solve in tmux (survives disconnect)
./run-blueprint-solve.sh start

# Detach from tmux: Ctrl+B, then D
# Exit SSH: type 'exit'

# Solve continues running in background!
```

## Monitor Progress

```bash
# Reconnect to instance
./deploy.sh ssh nlh-solver nlh-solver-key

# Attach to tmux session
./run-blueprint-solve.sh attach

# Or tail logs
./run-blueprint-solve.sh logs
```

## Download Results

After solve completes (1-2 hours):

```bash
# Get instance IP
PUBLIC_IP=$(aws cloudformation describe-stacks --stack-name nlh-solver \
  --query 'Stacks[0].Outputs[?OutputKey==`PublicIP`].OutputValue' --output text)

# Download strategy files
scp -i deploy/aws/nlh-solver-key.pem \
  ec2-user@$PUBLIC_IP:~/nlh-solver-spec-kit/data/strategies/*.pb.gz \
  ./results/

# Download blueprint configuration
scp -i deploy/aws/nlh-solver-key.pem \
  ec2-user@$PUBLIC_IP:~/nlh-solver-spec-kit/data/blueprints/*.json \
  ./results/
```

## Cleanup

**IMPORTANT:** Always delete the stack when done to avoid charges!

```bash
./deploy.sh delete nlh-solver
```

Or manually:
```bash
aws cloudformation delete-stack --stack-name nlh-solver
```

## Cost Breakdown

| Resource | Type | Cost/Hour | Total (2hr solve) |
|----------|------|-----------|-------------------|
| EC2 Instance | c6i.4xlarge | $0.68 | $1.36 |
| EBS Volume | 50GB gp3 | $0.008 | $0.02 |
| Elastic IP | Active | $0.00 | $0.00 |
| **Total** | | | **~$1.40** |

**Storage after deletion:** If you keep the EBS volume (set `DeleteOnTermination: false`), it costs ~$5/month for 50GB.

## Troubleshooting

### "KeyPair not found"
```bash
# List existing keypairs
aws ec2 describe-key-pairs

# Create new one
aws ec2 create-key-pair --key-name nlh-solver-key \
  --query 'KeyMaterial' --output text > nlh-solver-key.pem
chmod 400 nlh-solver-key.pem
```

### "Permission denied (publickey)"
```bash
# Check file permissions
ls -l nlh-solver-key.pem
# Should be: -r-------- (400)

# Fix if wrong
chmod 400 nlh-solver-key.pem
```

### "Stack already exists"
```bash
# Delete old stack first
./deploy.sh delete nlh-solver

# Wait for deletion
aws cloudformation wait stack-delete-complete --stack-name nlh-solver

# Try create again
./deploy.sh create nlh-solver nlh-solver-key
```

### Check instance status
```bash
./deploy.sh status nlh-solver
```

### View CloudFormation logs
```bash
aws cloudformation describe-stack-events --stack-name nlh-solver
```

## Security Notes

1. **SSH Access:** Restricted to your public IP only (`AllowedSSHCIDR` parameter)
2. **API Access:** Open on port 8080 (for testing only)
3. **Keypair:** Keep `nlh-solver-key.pem` secure and never commit to git
4. **AWS Credentials:** Never share your Access Key ID or Secret Access Key

## Next Steps After Solve

1. **Analyze results:**
   ```bash
   ./gradlew run --args="blueprint analyze-ev-loss <blueprint-id>"
   ```

2. **Extract ranges:**
   ```bash
   ./gradlew run --args="blueprint show <blueprint-id>"
   ```

3. **Run refinement solve:**
   ```bash
   ./gradlew run --args="refine solve <blueprint-id> --board KsQh7d"
   ```

## Support

- AWS EC2 Documentation: https://docs.aws.amazon.com/ec2/
- AWS CLI Reference: https://awscli.amazonaws.com/v2/documentation/api/latest/index.html
- CloudFormation Template: `deploy/aws/cloudformation.yml`
