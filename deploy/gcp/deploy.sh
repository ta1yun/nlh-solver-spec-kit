#!/bin/bash
# Deploy NLH Solver to Google Cloud Platform
#
# Prerequisites:
#   - gcloud CLI installed and authenticated
#   - Project created in GCP console
#
# Usage:
#   ./deploy.sh create [INSTANCE_NAME]
#   ./deploy.sh ssh [INSTANCE_NAME]
#   ./deploy.sh delete [INSTANCE_NAME]

set -e

INSTANCE_NAME="${2:-nlh-solver}"
ZONE="${GCP_ZONE:-us-central1-a}"
PROJECT="${GCP_PROJECT:-$(gcloud config get-value project)}"

# Instance configuration
MACHINE_TYPE="n2-highcpu-16"  # 16 vCPU, 16GB RAM - ~$0.65/hr
# Alternatives:
#   n2-highcpu-8     # 8 vCPU, 8GB RAM - ~$0.32/hr
#   n2-highcpu-32    # 32 vCPU, 32GB RAM - ~$1.30/hr
#   n2-highmem-16    # 16 vCPU, 128GB RAM - ~$1.04/hr

DISK_SIZE="50GB"
IMAGE_FAMILY="ubuntu-2204-lts"
IMAGE_PROJECT="ubuntu-os-cloud"

case "$1" in
    create)
        echo "Creating GCP Compute Engine instance: $INSTANCE_NAME"
        echo "  Project: $PROJECT"
        echo "  Zone: $ZONE"
        echo "  Machine: $MACHINE_TYPE"
        echo ""

        # Create instance with startup script
        gcloud compute instances create "$INSTANCE_NAME" \
            --project="$PROJECT" \
            --zone="$ZONE" \
            --machine-type="$MACHINE_TYPE" \
            --network-interface=network-tier=PREMIUM,subnet=default \
            --maintenance-policy=MIGRATE \
            --provisioning-model=STANDARD \
            --tags=http-server,https-server,nlh-solver \
            --create-disk=auto-delete=no,boot=yes,device-name="$INSTANCE_NAME",image=projects/$IMAGE_PROJECT/global/images/family/$IMAGE_FAMILY,mode=rw,size=$DISK_SIZE,type=projects/$PROJECT/zones/$ZONE/diskTypes/pd-balanced \
            --metadata-from-file=startup-script=startup-script.sh \
            --scopes=https://www.googleapis.com/auth/cloud-platform

        echo ""
        echo "✓ Instance created!"
        echo ""
        echo "Waiting for startup script to complete (2-3 minutes)..."
        sleep 180

        EXTERNAL_IP=$(gcloud compute instances describe "$INSTANCE_NAME" --zone="$ZONE" --format='get(networkInterfaces[0].accessConfigs[0].natIP)')

        echo ""
        echo "✓ Deployment complete!"
        echo ""
        echo "Access:"
        echo "  SSH: gcloud compute ssh $INSTANCE_NAME --zone=$ZONE"
        echo "  API: http://$EXTERNAL_IP:8080"
        echo ""
        echo "Run blueprint solve:"
        echo "  gcloud compute ssh $INSTANCE_NAME --zone=$ZONE"
        echo "  cd nlh-solver-spec-kit"
        echo "  ./run-blueprint-solve.sh start"
        echo ""
        echo "Estimated cost: ~\$0.65/hour (n2-highcpu-16)"
        echo "Remember to delete when done: ./deploy.sh delete $INSTANCE_NAME"
        ;;

    ssh)
        echo "Connecting to $INSTANCE_NAME..."
        gcloud compute ssh "$INSTANCE_NAME" --zone="$ZONE"
        ;;

    delete)
        echo "Deleting instance: $INSTANCE_NAME"
        echo ""
        read -p "Are you sure? (yes/no): " confirm
        if [ "$confirm" = "yes" ]; then
            gcloud compute instances delete "$INSTANCE_NAME" --zone="$ZONE" --quiet
            echo "✓ Instance deleted"
        else
            echo "Aborted"
        fi
        ;;

    status)
        echo "Instance status:"
        gcloud compute instances describe "$INSTANCE_NAME" --zone="$ZONE" --format="table(name,status,machineType,networkInterfaces[0].accessConfigs[0].natIP)"
        ;;

    logs)
        echo "Viewing serial console logs..."
        gcloud compute instances get-serial-port-output "$INSTANCE_NAME" --zone="$ZONE"
        ;;

    *)
        echo "Usage: $0 {create|ssh|delete|status|logs} [INSTANCE_NAME]"
        echo ""
        echo "Commands:"
        echo "  create  - Create new instance and deploy solver"
        echo "  ssh     - SSH into the instance"
        echo "  delete  - Delete the instance"
        echo "  status  - Show instance status"
        echo "  logs    - View startup logs"
        echo ""
        echo "Environment variables:"
        echo "  GCP_PROJECT - GCP project ID (default: current project)"
        echo "  GCP_ZONE    - GCP zone (default: us-central1-a)"
        exit 1
        ;;
esac
