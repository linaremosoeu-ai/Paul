#!/bin/bash

# Kubernetes Deployment Script

echo "Creating Kubernetes namespace and configuration..."
kubectl apply -f k8s/namespace-and-config.yaml

echo "Deploying databases..."
kubectl apply -f k8s/postgres-statefulset.yaml
kubectl apply -f k8s/redis-deployment.yaml

echo "Waiting for databases to be ready..."
kubectl wait --for=condition=ready pod -l app=umbrella-postgres -n umbrella --timeout=300s
kubectl wait --for=condition=ready pod -l app=umbrella-redis -n umbrella --timeout=300s

echo "Deploying backend and frontend..."
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml

echo "Waiting for services to be ready..."
kubectl wait --for=condition=available --timeout=300s deployment umbrella-api -n umbrella
kubectl wait --for=condition=available --timeout=300s deployment umbrella-frontend -n umbrella

echo "Deployment complete!"
echo ""
echo "Getting service endpoints..."
kubectl get svc -n umbrella
