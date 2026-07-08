# Umbrella Development Setup Guide

## Prerequisites

- Docker & Docker Compose
- .NET 9 SDK
- Node.js 20+
- PostgreSQL 16 (optional, Docker provides it)
- Neo4j 5.13 (optional, Docker provides it)
- Redis 7 (optional, Docker provides it)

## Quick Start with Docker Compose

### 1. Start Services

```bash
cd path/to/umbrella
docker-compose up -d
```

This starts:
- PostgreSQL on port 5432
- Redis on port 6379
- Neo4j on port 7687 (Bolt) and 7474 (Browser)
- Backend API on port 5000
- Frontend on port 3000

### 2. Database Setup

```bash
# Run migrations
docker-compose exec backend dotnet ef database update -p Umbrella.Infrastructure

# Seed initial data
docker-compose exec backend dotnet run --project Umbrella.Api seed
```

### 3. Access Services

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/swagger
- **Neo4j Browser**: http://localhost:7474 (neo4j/password)
- **PostgreSQL**: localhost:5432 (postgres/postgres)

## Local Development (Without Docker)

### Backend Setup

```bash
cd backend

# Install dependencies
dotnet restore

# Set environment variables
export ConnectionStrings__DefaultConnection="Host=localhost;Port=5432;Database=umbrella;Username=postgres;Password=postgres"
export Redis__ConnectionString="localhost:6379"
export Neo4j__Uri="bolt://localhost:7687"

# Run migrations
dotnet ef database update -p Umbrella.Infrastructure

# Start development server
dotnet run --project Umbrella.Api
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Set environment variables
export NEXT_PUBLIC_API_URL="http://localhost:5000"

# Start development server
npm run dev
```

## Project Structure

```
Paul/
├── frontend/                  # Next.js React application
│   ├── src/
│   │   ├── app/            # App router pages
│   │   ├── components/     # React components
│   │   └── lib/            # Utilities and helpers
│   └── package.json
├── backend/                   # .NET Core API
│   ├── Umbrella.Api/        # Main API project
│   ├── Umbrella.Application/ # Business logic
│   ├── Umbrella.Infrastructure/ # Data access
│   ├── Umbrella.Domain/     # Domain models
│   └── Umbrella.Api.sln
├── k8s/                       # Kubernetes manifests
├── scripts/                   # Deployment scripts
├── docker-compose.yml
└── README.md
```

## Common Commands

### Docker Compose

```bash
# View logs
docker-compose logs -f [service-name]

# Stop services
docker-compose down

# Rebuild containers
docker-compose build

# Access bash in container
docker-compose exec [service-name] bash
```

### .NET Commands

```bash
# Create migration
dotnet ef migrations add MigrationName -p Umbrella.Infrastructure

# Update database
dotnet ef database update -p Umbrella.Infrastructure

# Run tests
dotnet test

# Build
dotnet build
```

### React/Next.js Commands

```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

## Kubernetes Deployment

### Prerequisites

- kubectl configured
- Kubernetes cluster (minikube, EKS, AKS, etc.)
- Docker images pushed to registry

### Deploy

```bash
chmod +x scripts/deploy-k8s.sh
./scripts/deploy-k8s.sh
```

### Access Services

```bash
# Get service endpoints
kubectl get svc -n umbrella

# Port forward to local machine
kubectl port-forward -n umbrella svc/umbrella-api-service 5000:80
kubectl port-forward -n umbrella svc/umbrella-frontend-service 3000:80
```

## Environment Variables

### Backend (appsettings.json)

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=umbrella;Username=postgres;Password=postgres"
  },
  "Redis": {
    "ConnectionString": "localhost:6379"
  },
  "Neo4j": {
    "Uri": "bolt://localhost:7687",
    "Username": "neo4j",
    "Password": "password"
  }
}
```

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Troubleshooting

### Port Already in Use

```bash
# Find process using port
lsof -i :5000

# Kill process
kill -9 [PID]
```

### Database Connection Issues

```bash
# Test PostgreSQL connection
psql -h localhost -U postgres -d umbrella

# Check Docker service health
docker-compose ps
```

### Frontend Not Connecting to API

1. Check `NEXT_PUBLIC_API_URL` environment variable
2. Verify backend is running: `curl http://localhost:5000/api/health`
3. Check browser console for CORS errors

## Testing

### Backend Tests

```bash
cd backend
dotnet test
```

### Frontend Tests

```bash
cd frontend
npm test
```

## Contributing

1. Create a feature branch
2. Make changes
3. Run tests
4. Submit pull request

## Support

For issues, questions, or suggestions, please open a GitHub issue.
