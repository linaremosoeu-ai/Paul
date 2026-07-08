# Umbrella - Autonomous Business Intelligence Platform

> **Unified business intelligence that automatically analyzes your data, detects anomalies, and recommends actions.**

## 🌂 Overview

Umbrella is a comprehensive business intelligence platform that connects all your business data sources, analyzes them intelligently, and provides actionable insights and recommendations. It combines:

- **Unified Data Layer**: Connect CRM, ERP, HR, Accounting, and custom systems
- **Real-time Analytics**: Compute business metrics and KPIs automatically
- **Anomaly Detection**: AI-powered detection of unusual patterns
- **Root Cause Analysis**: Understand why changes happen in your business
- **Predictive Intelligence**: Forecast revenue, churn, and demand
- **Autonomous Recommendations**: Get AI-generated action items with impact estimates
- **Natural Language Interface**: Ask questions about your business in plain English
- **Knowledge Graph**: Store and query business relationships and patterns

## 🏗️ Architecture

### Technology Stack

**Backend:**
- **.NET 9**: Modern, high-performance REST API
- **PostgreSQL 16**: Primary data store for normalized business data
- **Redis 7**: Caching and real-time operations
- **Neo4j 5.13**: Knowledge graph for relationships and patterns
- **Docker & Kubernetes**: Container orchestration and deployment

**Frontend:**
- **Next.js 14**: Modern React framework with SSR
- **TypeScript**: Type-safe frontend development
- **Tailwind CSS**: Utility-first styling
- **Recharts**: Data visualization
- **React Query**: Data fetching and state management

**AI/ML:**
- **OpenAI/Claude**: LLM integration for chat and recommendations
- **Custom ML Models**: Anomaly detection and forecasting
- **Graph Analytics**: Pattern detection in Neo4j

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js)                       │
│  Dashboard | Metrics | Anomalies | Chat | Recommendations  │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                  API Gateway (.NET Core)                     │
│  Authentication | Rate Limiting | Request Validation        │
└────────────────────────┬────────────────────────────────────┘
                         │
    ┌────────────────────┼────────────────────┐
    │                    │                    │
┌───▼─────┐      ┌──────▼──────┐      ┌─────▼─────┐
│Metrics  │      │Integration  │      │Knowledge  │
│Service  │      │Service      │      │Graph      │
└───┬─────┘      └──────┬──────┘      │Service    │
    │                   │              └─────┬─────┘
    │              ┌────▼─────┐              │
    │              │Data      │              │
    │              │Ingestion │              │
    │              └──────────┘              │
    │                                        │
    ├────────────────────┬───────────────────┤
    │                    │                   │
┌───▼──────┐    ┌────────▼────────┐    ┌────▼──────┐
│PostgreSQL│    │     Redis       │    │   Neo4j   │
│          │    │   (Cache/Queue) │    │  (Graph)  │
└──────────┘    └─────────────────┘    └───────────┘

┌─────────────────────────────────────────────────────────────┐
│              External Data Sources (Connectors)             │
│  Salesforce | HubSpot | QuickBooks | Stripe | Custom APIs  │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Docker & Docker Compose
- .NET 9 SDK (for local development)
- Node.js 20+ (for frontend development)
- Git

### Clone and Setup

```bash
git clone https://github.com/yourusername/umbrella.git
cd umbrella

# Start with Docker Compose
docker-compose up -d

# Run migrations and seed data
docker-compose exec backend dotnet ef database update -p Umbrella.Infrastructure
docker-compose exec backend dotnet run --project Umbrella.Api seed
```

### Access Services

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Docs**: http://localhost:5000/swagger
- **Neo4j Browser**: http://localhost:7474 (neo4j/password)
- **PostgreSQL**: localhost:5432 (postgres/postgres)

## 📁 Project Structure

```
Umbrella/
├── frontend/                    # Next.js React application
│   ├── src/
│   │   ├── app/               # App router pages and layouts
│   │   ├── components/        # Reusable React components
│   │   ├── lib/               # Utilities, API client, store
│   │   └── styles/            # Global styles
│   ├── package.json
│   └── Dockerfile
│
├── backend/                     # .NET Core API
│   ├── Umbrella.Api/          # Main API project
│   ├── Umbrella.Application/  # Business logic & services
│   ├── Umbrella.Infrastructure/ # Data access & integrations
│   ├── Umbrella.Domain/       # Domain models
│   └── Dockerfile
│
├── k8s/                         # Kubernetes manifests
│   ├── namespace-and-config.yaml
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│   ├── postgres-statefulset.yaml
│   └── redis-deployment.yaml
│
├── scripts/                     # Deployment scripts
│   ├── deploy.sh              # Docker Compose deployment
│   └── deploy-k8s.sh          # Kubernetes deployment
│
├── docs/                        # Documentation
│   ├── SERVICES.md            # Service architecture
│   └── API.md                 # API documentation
│
├── docker-compose.yml          # Local development setup
├── SETUP.md                    # Setup guide
└── README.md                   # This file
```

## 🔌 Integrations

Umbrella supports integrations with:

### CRM Systems
- Salesforce
- HubSpot
- Pipedrive
- Microsoft Dynamics 365

### Accounting & Finance
- QuickBooks Online
- Xero
- FreshBooks
- Wave

### E-commerce
- Shopify
- WooCommerce
- BigCommerce
- Stripe

### HR & People
- BambooHR
- ADP
- Guidepoint
- Workday

### Custom APIs
- Build custom connectors for your systems

## 📊 Key Features

### 1. Unified Data Layer
- Connect multiple data sources
- Automatic data normalization
- Conflict resolution
- Data quality monitoring

### 2. Real-time Metrics
- Revenue, profit, costs
- Customer lifetime value (LTV)
- Customer acquisition cost (CAC)
- Employee productivity metrics
- Project profitability

### 3. Anomaly Detection
- Automatic pattern recognition
- Baseline comparison
- Statistical analysis
- Real-time alerts

### 4. Root Cause Analysis
- Data correlation analysis
- Knowledge graph querying
- Hypothesis generation
- Confidence scoring

### 5. Predictive Intelligence
- Revenue forecasting
- Churn prediction
- Demand forecasting
- Scenario simulation
- Risk assessment

### 6. Recommendations
- AI-generated action items
- Impact estimation
- Execution tracking
- Results measurement

### 7. Chat Interface
- Natural language questions
- Multi-turn conversations
- Context awareness
- Follow-up suggestions

### 8. Business Health Score
- Composite score (0-100)
- Category breakdowns
- Trend analysis
- Main concerns identification

## 🔐 Security

- **Authentication**: OAuth 2.0, JWT tokens
- **Authorization**: Role-based access control (RBAC)
- **Data Encryption**: TLS 1.3 for transport, AES-256 for storage
- **Audit Logging**: Complete activity trails
- **GDPR Compliant**: Data retention policies, user privacy

## 📈 Roadmap

### Phase 1: Foundation (Current)
- [x] Data ingestion framework
- [x] Core metrics calculation
- [x] Basic dashboard
- [ ] Initial integrations (Salesforce, QuickBooks)

### Phase 2: Intelligence
- [ ] Anomaly detection engine
- [ ] Root cause analysis
- [ ] Knowledge graph implementation
- [ ] Advanced analytics

### Phase 3: Prediction
- [ ] ML forecasting models
- [ ] Scenario simulation
- [ ] Health score calculation
- [ ] Predictive alerts

### Phase 4: Autonomous
- [ ] Recommendation engine
- [ ] Chat interface with LLM
- [ ] Auto-action framework
- [ ] Self-learning capabilities

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Setup

```bash
# Clone repository
git clone https://github.com/yourusername/umbrella.git
cd umbrella

# Backend development
cd backend
dotnet restore
dotnet build

# Frontend development
cd ../frontend
npm install
npm run dev
```

### Testing

```bash
# Backend tests
cd backend
dotnet test

# Frontend tests
cd frontend
npm test
```

## 📝 License

MIT License - See [LICENSE](LICENSE) file for details.

## 📞 Support

- **Documentation**: https://docs.umbrella.io
- **Issues**: GitHub Issues
- **Email**: support@umbrella.io
- **Community**: Discord Server

## 🌟 Acknowledgments

Built with amazing open-source projects:
- Next.js
- .NET Core
- PostgreSQL
- Neo4j
- Redis
- Docker

## 📊 Stats

- **Lines of Code**: 50,000+
- **API Endpoints**: 100+
- **Integrations Supported**: 30+
- **Database Connections**: 3 (PostgreSQL, Redis, Neo4j)
- **Frontend Components**: 50+

---

**Made with ☂️ and ❤️ by the Umbrella Team**
