#!/bin/bash
# GCP Compute Engine startup script for NLH Solver

set -e

echo "Starting NLH Solver deployment..."

# Update system
apt-get update
apt-get install -y docker.io docker-compose git tmux openjdk-21-jdk gradle

# Start Docker
systemctl start docker
systemctl enable docker

# Clone repository
cd /home/ubuntu
if [ ! -d "nlh-solver-spec-kit" ]; then
    git clone https://github.com/yourusername/nlh-solver-spec-kit.git
fi

cd nlh-solver-spec-kit

# Create data directories
mkdir -p data/blueprints data/strategies logs
chown -R ubuntu:ubuntu /home/ubuntu/nlh-solver-spec-kit

# Build Docker image
docker-compose build

# Start API server
docker-compose up -d api

# Get external IP
EXTERNAL_IP=$(curl -s http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip -H "Metadata-Flavor: Google")

# Create deployment info
cat > /home/ubuntu/deployment-info.txt << EOF
NLH Solver deployed on GCP!

API: http://$EXTERNAL_IP:8080
Health: http://$EXTERNAL_IP:8080/api/v1/health

SSH: gcloud compute ssh $(hostname)

To run blueprint solve:
  cd nlh-solver-spec-kit
  ./run-blueprint-solve.sh start

To monitor:
  ./run-blueprint-solve.sh logs
  docker-compose logs -f api
EOF

chown ubuntu:ubuntu /home/ubuntu/deployment-info.txt

echo "Deployment complete!"
