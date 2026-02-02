#!/bin/bash
# Quick cloud deployment script for NLH Solver
# Guides user through choosing provider and deploying

set -e

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║         NLH Solver - Cloud Deployment Wizard                 ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""
echo "Run your blueprint solve in the cloud (1-2 hours, ~\$1-2 total cost)"
echo ""

# Check prerequisites
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo "❌ $1 not found. Please install it first:"
        echo "   $2"
        exit 1
    fi
}

echo "Choose your cloud provider:"
echo ""
echo "  1) Google Cloud (GCP) - Fastest setup, cheapest (~\$0.65/hr)"
echo "  2) Amazon Web Services (AWS) - Most mature, production-ready (~\$0.68/hr)"
echo "  3) DigitalOcean - Simplest UX (~\$0.71/hr)"
echo "  4) Local Docker - For testing only (not recommended for long solves)"
echo ""
read -p "Enter choice (1-4): " provider

case $provider in
    1)
        echo ""
        echo "═══ Google Cloud Platform ═══"
        echo ""

        # Check gcloud
        if ! command -v gcloud &> /dev/null; then
            echo "❌ gcloud CLI not found"
            echo ""
            echo "Install instructions:"
            echo "  https://cloud.google.com/sdk/docs/install"
            echo ""
            echo "Quick install (macOS):"
            echo "  brew install google-cloud-sdk"
            echo "  gcloud auth login"
            echo "  gcloud config set project YOUR_PROJECT_ID"
            exit 1
        fi

        echo "✓ gcloud CLI found"
        echo ""

        PROJECT=$(gcloud config get-value project 2>/dev/null || echo "")
        if [ -z "$PROJECT" ]; then
            echo "No GCP project configured."
            read -p "Enter your GCP project ID: " PROJECT
            gcloud config set project $PROJECT
        fi

        echo "Project: $PROJECT"
        echo ""

        read -p "Instance name (default: nlh-solver): " INSTANCE_NAME
        INSTANCE_NAME=${INSTANCE_NAME:-nlh-solver}

        echo ""
        echo "Deploying to GCP..."
        echo "  Instance: $INSTANCE_NAME"
        echo "  Machine: n2-highcpu-16 (16 vCPU, 16GB RAM)"
        echo "  Cost: ~\$0.65/hour"
        echo ""
        read -p "Continue? (yes/no): " confirm

        if [ "$confirm" = "yes" ]; then
            cd deploy/gcp
            ./deploy.sh create $INSTANCE_NAME

            echo ""
            echo "═══ NEXT STEPS ═══"
            echo ""
            echo "1. SSH in:"
            echo "   gcloud compute ssh $INSTANCE_NAME"
            echo ""
            echo "2. Start blueprint solve:"
            echo "   cd nlh-solver-spec-kit"
            echo "   ./run-blueprint-solve.sh start"
            echo ""
            echo "3. Detach from tmux: Ctrl+B, then D"
            echo ""
            echo "4. Monitor later:"
            echo "   ./deploy/gcp/deploy.sh ssh $INSTANCE_NAME"
            echo "   ./run-blueprint-solve.sh attach"
            echo ""
            echo "5. When done, cleanup:"
            echo "   ./deploy/gcp/deploy.sh delete $INSTANCE_NAME"
        fi
        ;;

    2)
        echo ""
        echo "═══ Amazon Web Services ═══"
        echo ""

        if ! command -v aws &> /dev/null; then
            echo "❌ AWS CLI not found"
            echo ""
            echo "Install instructions:"
            echo "  https://aws.amazon.com/cli/"
            echo ""
            echo "Quick install (macOS):"
            echo "  brew install awscli"
            echo "  aws configure"
            exit 1
        fi

        echo "✓ AWS CLI found"
        echo ""

        read -p "Stack name (default: nlh-solver): " STACK_NAME
        STACK_NAME=${STACK_NAME:-nlh-solver}

        read -p "EC2 KeyPair name (must exist): " KEY_NAME

        echo ""
        echo "Deploying to AWS..."
        echo "  Stack: $STACK_NAME"
        echo "  Instance: c6i.4xlarge (16 vCPU, 32GB RAM)"
        echo "  Cost: ~\$0.68/hour"
        echo ""
        read -p "Continue? (yes/no): " confirm

        if [ "$confirm" = "yes" ]; then
            cd deploy/aws

            aws cloudformation create-stack \
              --stack-name $STACK_NAME \
              --template-body file://cloudformation.yml \
              --parameters \
                ParameterKey=KeyName,ParameterValue=$KEY_NAME \
                ParameterKey=InstanceType,ParameterValue=c6i.4xlarge \
              --capabilities CAPABILITY_IAM

            echo ""
            echo "Stack creation initiated. Waiting for completion (5-10 min)..."
            aws cloudformation wait stack-create-complete --stack-name $STACK_NAME

            PUBLIC_IP=$(aws cloudformation describe-stacks --stack-name $STACK_NAME \
              --query 'Stacks[0].Outputs[?OutputKey==`PublicIP`].OutputValue' --output text)

            echo ""
            echo "═══ DEPLOYMENT COMPLETE ═══"
            echo ""
            echo "SSH:"
            echo "  ssh -i $KEY_NAME.pem ec2-user@$PUBLIC_IP"
            echo ""
            echo "Then run:"
            echo "  cd nlh-solver-spec-kit"
            echo "  ./run-blueprint-solve.sh start"
            echo ""
            echo "Cleanup when done:"
            echo "  aws cloudformation delete-stack --stack-name $STACK_NAME"
        fi
        ;;

    3)
        echo ""
        echo "═══ DigitalOcean ═══"
        echo ""
        echo "Manual setup required:"
        echo ""
        echo "1. Go to https://cloud.digitalocean.com/droplets/new"
        echo "2. Select:"
        echo "   - Image: Docker on Ubuntu 22.04"
        echo "   - Plan: CPU-Optimized, 16 vCPU (\\$0.71/hr)"
        echo "   - Add your SSH key"
        echo "3. Create droplet"
        echo "4. SSH in:"
        echo "   ssh root@YOUR_DROPLET_IP"
        echo "5. Run:"
        echo "   git clone https://github.com/yourusername/nlh-solver-spec-kit.git"
        echo "   cd nlh-solver-spec-kit"
        echo "   ./run-blueprint-solve.sh start"
        echo ""
        ;;

    4)
        echo ""
        echo "═══ Local Docker ═══"
        echo ""
        echo "⚠️  WARNING: Not recommended for 1-2 hour solves!"
        echo ""
        echo "Running locally..."
        read -p "Continue anyway? (yes/no): " confirm

        if [ "$confirm" = "yes" ]; then
            docker-compose build
            docker-compose up -d api

            echo ""
            echo "✓ Docker container started"
            echo ""
            echo "Run blueprint solve:"
            echo "  docker exec -it nlh-solver-api bash"
            echo "  cd /app"
            echo "  ./gradlew runProductionBlueprint"
            echo ""
            echo "Or use tmux on host:"
            echo "  ./run-blueprint-solve.sh start"
        fi
        ;;

    *)
        echo "Invalid choice"
        exit 1
        ;;
esac
