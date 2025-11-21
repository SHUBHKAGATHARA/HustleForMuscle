#!/bin/sh
set -e

echo "Installing dependencies..."
npm ci --legacy-peer-deps || npm install --legacy-peer-deps

echo "Building application..."
npm run build

echo "Build completed successfully!"
