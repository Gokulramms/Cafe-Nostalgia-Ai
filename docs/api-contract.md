# API Contract

## Frontend → Rails API

### POST /api/v1/questions
Request:
```json
{
  "store_id": "example-store.myshopify.com",
  "question": "How much inventory should I reorder next week?"
}
