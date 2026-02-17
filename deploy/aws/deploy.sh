#!/bin/bash
# Deploy NLH Solver to AWS EC2
#
# Prerequisites:
#   - AWS CLI installed and configured (aws configure)
#   - EC2 KeyPair created
#
# Usage:
#   ./deploy.sh create [STACK_NAME] [KEY_NAME]
#   ./deploy.sh delete [STACK_NAME]
#   ./deploy.sh status [STACK_NAME]

set -e

STACK_NAME="${1:-nlh-solver}"
KEY_NAME="${2:-nlh-solver-key}"
REGION="${AWS_REGION:-us-east-1}"

cd "$(dirname "$0")"

case "${1:-help}" in
    create)
        STACK_NAME="${2:-nlh-solver}"
        KEY_NAME="${3:-nlh-solver-key}"

        echo "╔═══════════════════════════════════════════════════════════════╗"
        echo "║         AWS EC2 Deployment - NLH Solver                      ║"
        echo "╚═══════════════════════════════════════════════════════════════╝"
        echo ""
        echo "Configuration:"
        echo "  Stack name: $STACK_NAME"
        echo "  Key pair: $KEY_NAME"
        echo "  Region: $REGION"
        echo "  Instance: c6i.4xlarge (16 vCPU, 32GB RAM)"
        echo "  Cost: ~\$0.68/hour"
        echo ""

        # Check if keypair exists
        if ! aws ec2 describe-key-pairs --key-names "$KEY_NAME" --region "$REGION" &>/dev/null; then
            echo "❌ KeyPair '$KEY_NAME' not found in region $REGION"
            echo ""
            echo "Create it with:"
            echo "  aws ec2 create-key-pair --key-name $KEY_NAME --query 'KeyMaterial' --output text > ${KEY_NAME}.pem"
            echo "  chmod 400 ${KEY_NAME}.pem"
            exit 1
        fi

        echo "✓ KeyPair found: $KEY_NAME"
        echo ""

        # Get your public IP for SSH security group
        MY_IP=$(curl -s https://checkip.amazonaws.com)
        echo "Your public IP: $MY_IP"
        echo "SSH will be restricted to: ${MY_IP}/32"
        echo ""

        read -p "Continue with deployment? (yes/no): " confirm
        if [ "$confirm" != "yes" ]; then
            echo "Aborted."
            exit 0
        fi

        echo ""
        echo "Creating CloudFormation stack..."

        aws cloudformation create-stack \
            --stack-name "$STACK_NAME" \
            --template-body file://cloudformation.yml \
            --parameters \
                ParameterKey=KeyName,ParameterValue="$KEY_NAME" \
                ParameterKey=InstanceType,ParameterValue=c6i.4xlarge \
                ParameterKey=AllowedSSHCIDR,ParameterValue="${MY_IP}/32" \
            --capabilities CAPABILITY_IAM \
            --region "$REGION"

        echo ""
        echo "Stack creation initiated. Waiting for completion (5-10 min)..."
        echo "You can monitor progress at:"
        echo "  https://console.aws.amazon.com/cloudformation/"
        echo ""

        aws cloudformation wait stack-create-complete \
            --stack-name "$STACK_NAME" \
            --region "$REGION"

        echo ""
        echo "═══════════════════════════════════════════════════════════════"
        echo "✓ DEPLOYMENT COMPLETE"
        echo "═══════════════════════════════════════════════════════════════"
        echo ""

        # Get outputs
        PUBLIC_IP=$(aws cloudformation describe-stacks \
            --stack-name "$STACK_NAME" \
            --region "$REGION" \
            --query 'Stacks[0].Outputs[?OutputKey==`PublicIP`].OutputValue' \
            --output text)

        API_URL=$(aws cloudformation describe-stacks \
            --stack-name "$STACK_NAME" \
            --region "$REGION" \
            --query 'Stacks[0].Outputs[?OutputKey==`APIURL`].OutputValue' \
            --output text)

        echo "Access Information:"
        echo "  Public IP: $PUBLIC_IP"
        echo "  API URL: $API_URL"
        echo ""
        echo "SSH Command:"
        echo "  ssh -i ${KEY_NAME}.pem ec2-user@$PUBLIC_IP"
        echo ""
        echo "═══════════════════════════════════════════════════════════════"
        echo "IMPORTANT: Repository Setup Required"
        echo "═══════════════════════════════════════════════════════════════"
        echo ""
        echo "The instance is deployed but needs the code. You have 2 options:"
        echo ""
        echo "OPTION 1: Push to GitHub (recommended)"
        echo "  1. Create GitHub repo: https://github.com/new"
        echo "  2. Push code:"
        echo "     git remote add origin https://github.com/USERNAME/nlh-solver-spec-kit.git"
        echo "     git push -u origin 001-nlh-poker-solver"
        echo "  3. SSH in and clone:"
        echo "     ssh -i ${KEY_NAME}.pem ec2-user@$PUBLIC_IP"
        echo "     git clone https://github.com/USERNAME/nlh-solver-spec-kit.git"
        echo "     cd nlh-solver-spec-kit"
        echo "     ./run-blueprint-solve.sh start"
        echo ""
        echo "OPTION 2: Use scp to copy local files"
        echo "  cd ../.."  # Back to project root
        echo "  tar czf nlh-solver.tar.gz --exclude='.git' --exclude='build' ."
        echo "  scp -i ${KEY_NAME}.pem nlh-solver.tar.gz ec2-user@$PUBLIC_IP:~/"
        echo "  ssh -i ${KEY_NAME}.pem ec2-user@$PUBLIC_IP"
        echo "  tar xzf nlh-solver.tar.gz"
        echo "  ./gradlew build"
        echo "  ./run-blueprint-solve.sh start"
        echo ""
        ;;

    delete)
        STACK_NAME="${2:-nlh-solver}"

        echo "Deleting CloudFormation stack: $STACK_NAME"
        echo ""
        read -p "Are you sure? (yes/no): " confirm

        if [ "$confirm" = "yes" ]; then
            aws cloudformation delete-stack \
                --stack-name "$STACK_NAME" \
                --region "$REGION"

            echo ""
            echo "Stack deletion initiated. Waiting for completion..."

            aws cloudformation wait stack-delete-complete \
                --stack-name "$STACK_NAME" \
                --region "$REGION"

            echo "✓ Stack deleted"
        else
            echo "Aborted"
        fi
        ;;

    status)
        STACK_NAME="${2:-nlh-solver}"

        echo "Stack Status: $STACK_NAME"
        echo ""

        aws cloudformation describe-stacks \
            --stack-name "$STACK_NAME" \
            --region "$REGION" \
            --query 'Stacks[0].[StackStatus,CreationTime]' \
            --output table

        echo ""
        echo "Outputs:"
        aws cloudformation describe-stacks \
            --stack-name "$STACK_NAME" \
            --region "$REGION" \
            --query 'Stacks[0].Outputs' \
            --output table
        ;;

    ssh)
        STACK_NAME="${2:-nlh-solver}"
        KEY_NAME="${3:-nlh-solver-key}"

        PUBLIC_IP=$(aws cloudformation describe-stacks \
            --stack-name "$STACK_NAME" \
            --region "$REGION" \
            --query 'Stacks[0].Outputs[?OutputKey==`PublicIP`].OutputValue' \
            --output text)

        if [ -z "$PUBLIC_IP" ]; then
            echo "❌ Could not get public IP for stack: $STACK_NAME"
            exit 1
        fi

        echo "Connecting to $PUBLIC_IP..."
        ssh -i "${KEY_NAME}.pem" ec2-user@"$PUBLIC_IP"
        ;;

    *)
        echo "Usage: $0 {create|delete|status|ssh} [STACK_NAME] [KEY_NAME]"
        echo ""
        echo "Commands:"
        echo "  create [STACK] [KEY]  - Create new EC2 instance with CloudFormation"
        echo "  delete [STACK]        - Delete the CloudFormation stack"
        echo "  status [STACK]        - Show stack status and outputs"
        echo "  ssh [STACK] [KEY]     - SSH into the instance"
        echo ""
        echo "Environment variables:"
        echo "  AWS_REGION - AWS region (default: us-east-1)"
        echo ""
        echo "Prerequisites:"
        echo "  1. Install AWS CLI:"
        echo "     brew install awscli  # macOS"
        echo ""
        echo "  2. Configure AWS credentials:"
        echo "     aws configure"
        echo ""
        echo "  3. Create EC2 KeyPair:"
        echo "     aws ec2 create-key-pair --key-name nlh-solver-key \\"
        echo "       --query 'KeyMaterial' --output text > nlh-solver-key.pem"
        echo "     chmod 400 nlh-solver-key.pem"
        echo ""
        exit 1
        ;;
esac
