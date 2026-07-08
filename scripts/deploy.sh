#!/bin/bash

# Umbrella Deployment Script

echo "Building Umbrella containers..."
docker-compose build

echo "Starting services..."
docker-compose up -d

echo "Waiting for services to be healthy..."
sleep 30

echo "Creating database..."
docker-compose exec -T backend dotnet ef database update -p Umbrella.Infrastructure

echo "Seeding database..."
docker-compose exec -T backend dotnet run --project Umbrella.Api seed

echo "Deployment complete!"
echo ""
echo "Services running at:"
echo "  Frontend: http://localhost:3000"
echo "  Backend API: http://localhost:5000"
echo "  API Docs: http://localhost:5000/swagger"
echo "  Neo4j Browser: http://localhost:7474"
echo ""
echo "To stop services: docker-compose down"
echo "To view logs: docker-compose logs -f"
