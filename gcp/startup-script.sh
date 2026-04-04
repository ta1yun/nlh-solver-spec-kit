#!/bin/bash
set -e

# Install dependencies
apt-get update
apt-get install -y git openjdk-17-jdk tmux gradle wget unzip

# Clone repo as tpai user
cd /home/tpai
if [ ! -d "nlh-solver-spec-kit" ]; then
  sudo -u tpai git clone https://github.com/ta1yun/nlh-solver-spec-kit.git
  cd nlh-solver-spec-kit
  sudo -u tpai git checkout 001-nlh-poker-solver

  # Create logs and data directories
  sudo -u tpai mkdir -p logs data/blueprints data/strategies

  # Build the project
  sudo -u tpai gradle build -x test
fi

echo "Setup complete" > /home/tpai/setup-done.txt
chown tpai:tpai /home/tpai/setup-done.txt
