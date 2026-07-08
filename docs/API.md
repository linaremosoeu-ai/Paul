# Umbrella API Documentation

## Overview

The Umbrella API is a RESTful API built with .NET Core that provides endpoints for:
- Data management and querying
- Metrics calculation and retrieval
- Anomaly detection and analysis
- Recommendations and predictions
- Chat and natural language queries

## Base URL

```
http://localhost:5000/api
```

## Authentication

All API endpoints require authentication via JWT token in the `Authorization` header:

```
Authorization: Bearer <your_jwt_token>
```

## Core Endpoints

### Health Check

**GET** `/api/health`

Check if the API is running.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Companies

**GET** `/api/companies`

List all companies.

**GET** `/api/companies/{id}`

Get company details.

**POST** `/api/companies`

Create a new company.

**PUT** `/api/companies/{id}`

Update company.

**DELETE** `/api/companies/{id}`

Delete company.

### Integrations

**GET** `/api/integrations`

List all integrations for a company.

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "companyId": "550e8400-e29b-41d4-a716-446655440001",
  "connectorType": "salesforce",
  "name": "Salesforce CRM",
  "isActive": true,
  "lastSyncAt": "2024-01-15T10:30:00Z",
  "createdAt": "2024-01-10T15:20:00Z"
}
```

**POST** `/api/integrations`

Create a new integration.

```json
{
  "companyId": "550e8400-e29b-41d4-a716-446655440001",
  "connectorType": "salesforce",
  "name": "Salesforce CRM",
  "credentials": {
    "instanceUrl": "https://company.salesforce.com",
    "clientId": "...",
    "clientSecret": "..."
  }
}
```

**POST** `/api/integrations/{id}/sync`

Trigger data synchronization.

### Metrics

**GET** `/api/metrics?companyId={id}`

Get all metrics for a company.

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "companyId": "550e8400-e29b-41d4-a716-446655440001",
    "key": "monthly_revenue",
    "name": "Monthly Revenue",
    "value": 125000.00,
    "unit": "USD",
    "trend": "up",
    "changePercent": 12.5,
    "calculatedAt": "2024-01-15T10:30:00Z"
  }
]
```

**GET** `/api/metrics/{id}`

Get specific metric details.

**GET** `/api/metrics/{id}/history`

Get metric history for time period.

```json
{
  "metricId": "550e8400-e29b-41d4-a716-446655440000",
  "dataPoints": [
    {
      "date": "2024-01-15",
      "value": 125000.00
    },
    {
      "date": "2024-01-14",
      "value": 120000.00
    }
  ]
}
```

### Anomalies

**GET** `/api/anomalies?companyId={id}`

Get detected anomalies.

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "companyId": "550e8400-e29b-41d4-a716-446655440001",
    "metricId": "550e8400-e29b-41d4-a716-446655440002",
    "description": "Revenue dropped 30%",
    "changePercent": -30.0,
    "severity": "high",
    "status": "detected",
    "detectedAt": "2024-01-15T09:00:00Z"
  }
]
```

**GET** `/api/anomalies/{id}`

Get anomaly details.

**POST** `/api/anomalies/{id}/analyze`

Trigger root cause analysis.

**PUT** `/api/anomalies/{id}/resolve`

Mark anomaly as resolved.

### Root Cause Analysis

**POST** `/api/analysis/root-cause`

Analyze root cause of anomaly.

```json
{
  "anomalyId": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440003",
  "anomalyId": "550e8400-e29b-41d4-a716-446655440000",
  "problemDescription": "Revenue dropped 30%",
  "possibleCauses": [
    {
      "cause": "Large customer churned",
      "probability": 0.85,
      "description": "Customer X closed their account"
    },
    {
      "cause": "Seasonal decline",
      "probability": 0.45,
      "description": "Q4 typically shows 20% decline"
    }
  ],
  "analyzedAt": "2024-01-15T10:30:00Z"
}
```

### Recommendations

**GET** `/api/recommendations?companyId={id}`

Get recommendations.

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "companyId": "550e8400-e29b-41d4-a716-446655440001",
    "title": "Launch customer retention campaign",
    "description": "Proactive outreach to at-risk customers",
    "category": "sales",
    "severity": "high",
    "expectedImpact": 50000.00,
    "expectedImpactUnit": "USD",
    "status": "pending",
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

**POST** `/api/recommendations`

Create recommendation.

**PUT** `/api/recommendations/{id}/approve`

Approve recommendation.

**PUT** `/api/recommendations/{id}/execute`

Mark recommendation as in progress.

### Predictions

**POST** `/api/predictions/forecast-revenue`

Forecast revenue.

```json
{
  "companyId": "550e8400-e29b-41d4-a716-446655440001",
  "months": 12
}
```

**Response:**
```json
{
  "metricName": "Revenue Forecast",
  "dataPoints": [
    {
      "date": "2024-02-15",
      "value": 128000.00,
      "upperBound": 135000.00,
      "lowerBound": 121000.00
    }
  ],
  "confidence": 0.87,
  "trend": "up"
}
```

**POST** `/api/predictions/simulate-scenario`

Simulate business scenario.

```json
{
  "companyId": "550e8400-e29b-41d4-a716-446655440001",
  "scenario": {
    "name": "Increase pricing by 10%",
    "description": "What if we raise prices?",
    "changes": {
      "price": 1.10
    },
    "monthsToSimulate": 12
  }
}
```

### Chat

**POST** `/api/chat/ask`

Ask a question about your business.

```json
{
  "companyId": "550e8400-e29b-41d4-a716-446655440001",
  "userId": "550e8400-e29b-41d4-a716-446655440002",
  "question": "Why did revenue drop last week?"
}
```

**Response:**
```json
{
  "conversationId": "550e8400-e29b-41d4-a716-446655440003",
  "question": "Why did revenue drop last week?",
  "answer": "Based on your data, the main cause was the churn of your largest customer...",
  "answerType": "analysis",
  "supportingEvidence": [
    {
      "title": "Customer X Account Closed",
      "value": 50000,
      "unit": "USD",
      "measuredAt": "2024-01-12T00:00:00Z"
    }
  ],
  "followUpSuggestions": [
    {
      "question": "What is the impact of losing customer X?",
      "context": "Understanding the financial impact"
    }
  ],
  "answeredAt": "2024-01-15T10:30:00Z"
}
```

**GET** `/api/chat/history?companyId={id}&limit=50`

Get chat history.

### Health Score

**GET** `/api/health-score?companyId={id}`

Get current health score.

```json
{
  "companyId": "550e8400-e29b-41d4-a716-446655440001",
  "overall": 87,
  "finance": 92,
  "customers": 81,
  "operations": 85,
  "employees": 89,
  "projects": 83,
  "status": "healthy",
  "mainConcerns": [
    "Customer churn increasing",
    "Operating costs up 15%"
  ],
  "calculatedAt": "2024-01-15T10:30:00Z"
}
```

**GET** `/api/health-score/{companyId}/trend?days=30`

Get health score trend.

## Error Responses

All error responses follow this format:

```json
{
  "statusCode": 400,
  "message": "Invalid request",
  "errors": [
    {
      "field": "companyId",
      "message": "Company ID is required"
    }
  ]
}
```

### Common Status Codes

- `200 OK`: Successful request
- `201 Created`: Resource created
- `400 Bad Request`: Invalid input
- `401 Unauthorized`: Missing or invalid token
- `403 Forbidden`: Access denied
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Rate Limiting

API has rate limiting:
- 1000 requests per hour per API key
- 100 requests per minute for authenticated users

Rate limit headers:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1705315200
```

## Webhooks

Subscribe to events:

- `anomaly.detected`: When anomaly detected
- `metric.calculated`: When metric updated
- `recommendation.generated`: When recommendation created
- `integration.synced`: When integration syncs data

## Pagination

List endpoints support pagination:

```
GET /api/metrics?page=1&pageSize=10&companyId={id}
```

Response includes:
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "totalCount": 150,
    "totalPages": 15
  }
}
```

## Filtering & Sorting

Many endpoints support filtering and sorting:

```
GET /api/metrics?companyId={id}&status=active&sortBy=createdAt&sortOrder=desc
```

## Examples

### Get Revenue Anomalies

```bash
curl -X GET "http://localhost:5000/api/anomalies?companyId=550e8400-e29b-41d4-a716-446655440001&severity=high" \
  -H "Authorization: Bearer your_token"
```

### Trigger Integration Sync

```bash
curl -X POST "http://localhost:5000/api/integrations/550e8400-e29b-41d4-a716-446655440000/sync" \
  -H "Authorization: Bearer your_token"
```

### Ask a Question

```bash
curl -X POST "http://localhost:5000/api/chat/ask" \
  -H "Authorization: Bearer your_token" \
  -H "Content-Type: application/json" \
  -d '{
    "companyId": "550e8400-e29b-41d4-a716-446655440001",
    "userId": "550e8400-e29b-41d4-a716-446655440002",
    "question": "What is my current health score?"
  }'
```

## SDK Support

Official SDKs available for:
- Python
- JavaScript/TypeScript
- Go
- Java

## API Changelog

See [CHANGELOG.md](CHANGELOG.md) for API version history and breaking changes.
