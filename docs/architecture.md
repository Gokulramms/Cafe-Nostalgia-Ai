# Shopify AI Analytics – Architecture

## Overview
This project is an **AI-powered, agent-based analytics platform** for Shopify stores.
It converts natural language questions into ShopifyQL queries, executes analytics,
predicts future trends, and explains results in business-friendly language.

---

## System Architecture

Frontend (Next.js)
→ Rails API Gateway
→ Python AI Agent
→ Shopify APIs (ShopifyQL)

---

## Components

### Frontend (Next.js)
- Chat-style AI interface
- Sends natural language questions
- Displays answers with confidence level

### Rails API (Gateway Layer)
- Shopify OAuth authentication
- Secure token storage
- Request validation
- Forwards questions to AI service

### Python AI Service
- Agent-based workflow:
  - Intent detection
  - Planning
  - ShopifyQL generation
  - Validation
  - Forecasting
  - Explanation
- Confidence scoring

---

## Design Principles
- Separation of concerns
- Explainable AI
- Secure credential handling
- Scalable microservice design
