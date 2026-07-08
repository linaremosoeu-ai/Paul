# Umbrella Services Architecture

## Core Services Overview

### 1. Integration Service
**Purpose:** Connect and manage external systems

**Responsibilities:**
- Register new data sources (CRM, ERP, HR, Accounting)
- Manage connection credentials
- Trigger sync operations
- Track sync history and status

**Key Methods:**
- `GetByIdAsync()` - Retrieve integration details
- `GetByCompanyAsync()` - List all integrations for a company
- `CreateAsync()` - Add new integration
- `SyncDataAsync()` - Trigger data synchronization

### 2. Data Ingestion Service
**Purpose:** Normalize and process data from external sources

**Responsibilities:**
- Transform raw data into unified business objects
- Validate data quality
- Handle conflicts and duplicates
- Store data in PostgreSQL

**Key Methods:**
- `IngestCustomerDataAsync()` - Process customer data
- `IngestTransactionDataAsync()` - Process transactions
- `IngestEmployeeDataAsync()` - Process employee data
- `IngestMetricsAsync()` - Ingest pre-calculated metrics

### 3. Metrics Service
**Purpose:** Calculate and track business KPIs

**Responsibilities:**
- Calculate revenue, profit, costs
- Compute customer metrics (churn, LTV, CAC)
- Track employee metrics (utilization, retention)
- Update metric values in real-time

**Key Methods:**
- `GetMetricAsync()` - Retrieve a specific metric
- `GetAllMetricsAsync()` - Get all company metrics
- `CalculateRevenueAsync()` - Calculate revenue for period
- `CalculateChurnRateAsync()` - Calculate customer churn

### 4. Anomaly Detection Service
**Purpose:** Identify unusual patterns and changes

**Responsibilities:**
- Monitor metrics for significant changes
- Detect patterns that deviate from baseline
- Trigger alerts for critical anomalies
- Store anomaly history

**Key Methods:**
- `DetectAnomaliesAsync()` - Run anomaly detection
- `GetAnomaliesAsync()` - Retrieve detected anomalies
- `MarkAnomalyResolvedAsync()` - Mark anomaly as addressed

### 5. Root Cause Analysis Service
**Purpose:** Investigate why business changes occur

**Responsibilities:**
- Analyze data correlations
- Query knowledge graph for relationships
- Generate cause hypotheses
- Rank causes by probability

**Key Methods:**
- `AnalyzeAnomalyAsync()` - Investigate an anomaly
- `AnalyzeMetricChangeAsync()` - Analyze metric change
- `FindCorrelationsAsync()` - Find related metrics

### 6. Prediction Service
**Purpose:** Forecast future business scenarios

**Responsibilities:**
- Train ML models on historical data
- Generate forecasts for key metrics
- Simulate "what-if" scenarios
- Assess risks in projections

**Key Methods:**
- `ForecastRevenueAsync()` - Project revenue
- `ForecastChurnAsync()` - Predict customer churn
- `SimulateScenarioAsync()` - Run scenario simulation

### 7. Recommendation Service
**Purpose:** Suggest actions to improve business

**Responsibilities:**
- Generate recommendations based on analysis
- Estimate impact of recommendations
- Track approval and execution
- Measure actual results vs. projections

**Key Methods:**
- `GetRecommendationsAsync()` - List recommendations
- `CreateRecommendationAsync()` - Generate new recommendation
- `ApproveRecommendationAsync()` - Approve action

### 8. Knowledge Graph Service
**Purpose:** Store and query business relationships

**Responsibilities:**
- Build graph from normalized data
- Query relationships using Neo4j
- Find patterns and connections
- Support reasoning and inference

**Key Methods:**
- `BuildGraphAsync()` - Create/update knowledge graph
- `FindRelationshipsAsync()` - Query entity relationships
- `AnalyzePatternAsync()` - Find patterns in graph

### 9. Health Score Service
**Purpose:** Provide business health overview

**Responsibilities:**
- Calculate composite health score
- Break down score by category
- Track trends over time
- Identify main concerns

**Key Methods:**
- `CalculateHealthScoreAsync()` - Compute overall health
- `GetHealthScoreTrendAsync()` - Trend analysis
- `GetDetailedBreakdownAsync()` - Category breakdown

### 10. Chat Service
**Purpose:** Natural language interface to business intelligence

**Responsibilities:**
- Parse natural language questions
- Route to appropriate analysis
- Generate natural language responses
- Provide follow-up suggestions

**Key Methods:**
- `AskQuestionAsync()` - Process user question
- `GetChatHistoryAsync()` - Retrieve conversation history

## Service Dependencies

```
Chat Service
    ├── Metrics Service
    ├── Root Cause Analysis Service
    ├── Prediction Service
    ├── Recommendation Service
    └── Knowledge Graph Service

Root Cause Analysis Service
    ├── Knowledge Graph Service
    └── Metrics Service

Prediction Service
    └── Metrics Service

Anomaly Detection Service
    ├── Metrics Service
    └── Root Cause Analysis Service (on detection)

Recommendation Service
    ├── Prediction Service
    ├── Root Cause Analysis Service
    └── Health Score Service

Health Score Service
    └── Metrics Service

Data Ingestion Service
    ├── Integration Service
    ├── Knowledge Graph Service
    └── Metrics Service
```

## Implementation Strategy

### Phase 1: Foundation
1. Implement Integration Service
2. Implement Data Ingestion Service
3. Implement Metrics Service
4. Set up PostgreSQL with normalized schema

### Phase 2: Intelligence
1. Implement Knowledge Graph Service
2. Implement Anomaly Detection Service
3. Implement Root Cause Analysis Service
4. Build Neo4j graph model

### Phase 3: Prediction
1. Implement Prediction Service with ML models
2. Implement Health Score Service
3. Build scenario simulation engine

### Phase 4: Autonomous
1. Implement Recommendation Service
2. Implement Chat Service with LLM integration
3. Build action tracking and measurement
4. Enable self-learning from outcomes

## Data Flow Example: Revenue Anomaly

```
1. Data Ingestion Service pulls sales data from Salesforce
2. Metrics Service calculates daily revenue
3. Anomaly Detection Service detects 30% drop
4. Root Cause Analysis Service queries:
   - Large customer churn?
   - Pricing change?
   - Seasonal pattern?
5. Knowledge Graph Service finds customer X closed account
6. Prediction Service forecasts impact
7. Recommendation Service suggests:
   - Win-back campaign for customer X
   - Adjust pricing strategy
8. Chat Service answers: "Why did revenue drop?"
9. User approves recommendation
10. Recommendation Service tracks results
```

## Error Handling

- All services implement retry logic
- Graceful degradation when external systems unavailable
- Comprehensive logging for debugging
- Alert system for critical failures

## Testing Strategy

- Unit tests for business logic
- Integration tests with test databases
- Mock external service responses
- Load testing for high-volume scenarios
