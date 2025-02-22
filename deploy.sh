#!/bin/bash

# Step 1: Pull the latest changes from Git
echo "Pulling latest changes from Git..."
git pull origin main

# Check if the git pull was successful
if [ $? -ne 0 ]; then
  echo "Git pull failed. Exiting..."
  exit 1
fi

# Step 2: Rebuild the website
echo "Rebuilding..."
pnpm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Exiting..."
  exit 1
fi

echo "Deployment completed successfully!"