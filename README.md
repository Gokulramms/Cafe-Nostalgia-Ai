
# 🌌 Cafe Nostalgia AI

### **Real-Time Shopify Intelligence Platform powered by AI**

> **A production-grade, multi-service AI analytics system that connects to real Shopify stores, ingests live commerce data, and delivers explainable business insights using AI agents.**

---

<p align="center">
  <b>⚡ Real Data • 🤖 AI Reasoning • 🏗️ Scalable Architecture • 🔐 Secure OAuth</b>
</p>

---

## 🚀 Why This Project Exists

Modern e-commerce platforms generate **massive amounts of data**, but most store owners:

* See numbers ❌ but don’t understand *why*
* Use dashboards ❌ without actionable insights
* Don’t have a natural way to ask business questions

**Cafe Nostalgia AI** solves this by combining:

> **Real Shopify data + Structured analytics + AI reasoning**

This is **not a demo**.
This is built like a **real SaaS product**.

---

## 🧠 What Makes This Project Advanced

✔ Connects to **real Shopify stores (OAuth)**
✔ Uses **real orders & inventory data**
✔ Backend owns and validates all data
✔ AI works as a **reasoning engine**, not a chatbot
✔ Clean separation of responsibilities
✔ Handles real-world edge cases & failures

---

## 🏗️ System Architecture (Production-Style)

```
┌──────────────────────┐
│  Next.js Frontend    │
│  (Dashboard + Chat)  │
└──────────┬───────────┘
           │ JWT / REST
┌──────────▼───────────┐
│  Rails API (Core)    │
│  - Auth & Security   │
│  - Shopify OAuth     │
│  - Data Ownership    │
└──────────┬───────────┘
           │ Internal API
┌──────────▼──────────────┐
│  AI Service (FastAPI)   │
│  - Gemini AI            │
│  - Agent & Tools        │
│  - Reasoning Engine     │
└──────────┬──────────────┘
           │
┌──────────▼──────────┐
│   Shopify Platform  │
│   (Real Store Data) │
└─────────────────────┘
```

> **Key Principle:**
> AI never fetches data directly.
> AI only reasons over **validated, structured business data**.

---

## ✨ Core Features

### 🔐 Secure Authentication

* JWT-based user authentication
* Protected APIs
* Secure session handling
* No secrets exposed to frontend

---

### 🛍️ Real Shopify Integration

* Shopify OAuth (industry-correct flow)
* Secure access token storage
* Real store permissions
* Supported scopes:

  * Orders
  * Products
  * Inventory
  * Customers

---

### 📊 Analytics Dashboard

* Revenue Today
* Orders Today
* Inventory Risk Indicator
* Sales trend visualization
* Empty-state safe (no crashes, no fake data)

---

### 🤖 AI-Powered Business Insights

* Ask questions in natural language
* AI analyzes **real metrics**
* Generates:

  * Trend explanations
  * Observations
  * Confidence scores
* Agent-style orchestration (not prompt dumping)

---

### 💬 Insight History

* Stores user questions & AI answers
* Review past decisions
* Trace how insights evolved over time

---

## 🧩 Tech Stack (Modern & Scalable)

### Frontend

* Next.js 14 (App Router)
* TypeScript
* Tailwind CSS
* Modular UI architecture

### Backend

* Ruby on Rails 7 (API-only)
* JWT Authentication
* Shopify REST Admin API
* SQLite (dev) / PostgreSQL ready

### AI Service

* Python + FastAPI
* Google Gemini API
* Agent-based design
* Tool-calling ready

---

## 📁 Project Structure

```
Cafe-Nostalgia-Ai/
│
├── frontend/        # Next.js UI & UX
├── rails-api/       # Core backend & data layer
├── ai-service/      # AI orchestration & reasoning
└── README.md
```

---

## ⚙️ Environment Setup (Keys & Config)

### 🔑 Shopify (Rails API)

**File:** `rails-api/.env`

```env
SHOPIFY_API_KEY=your_shopify_client_id
SHOPIFY_API_SECRET=your_shopify_client_secret
SHOPIFY_SCOPES=read_orders,read_products,read_inventory,read_customers
SHOPIFY_REDIRECT_URI=http://localhost:3001/api/v1/shopify/callback

JWT_SECRET=super_secure_key
```

📍 From: **Shopify Partners → App → API Credentials**

---

### 🤖 AI Service

**File:** `ai-service/.env`

```env
GEMINI_API_KEY=your_gemini_api_key
```

📍 From: **Google AI Studio**

---

### 🌐 Frontend

No sensitive keys required.

---

## ▶️ How to Run Locally

### 1️⃣ Backend (Rails)

```bash
cd rails-api
bundle install
rails db:migrate
rails s -p 3001
```

---

### 2️⃣ AI Service

```bash
cd ai-service
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

---

### 3️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🔄 Shopify Connection Flow

1. Login to the platform
2. Navigate to **Connect Shopify**
3. Enter dev store domain:

   ```
   your-store.myshopify.com
   ```
4. Approve app permissions
5. Redirect back to dashboard
6. Store token securely saved

---

## 🧠 Design Philosophy

* **AI ≠ Data Source**
* **Backend = Source of Truth**
* **Frontend = Experience Layer**
* **AI = Reasoning & Intelligence**

This separation mirrors **real startup architectures**.

---

## 🎯 Why This Project Stands Out in Placements

* Uses **real external systems**
* Demonstrates **system design thinking**
* Shows **security & data ownership**
* AI used responsibly and correctly
* Built for scalability, not demos

This is the kind of project reviewed positively by:

* Product engineers
* Backend architects
* AI teams
* Startup founders

---

## 🚀 Future Enhancements

* Real-time Shopify webhooks
* Advanced forecasting models
* Multi-store analytics
* Cloud deployment (AWS / GCP)
* Role-based dashboards

---

## 👤 Author

**Gokul Ramm S**
Full-Stack Developer | AI & Systems Builder

🌐 Portfolio:
👉 **[https://gokulramm.vercel.app/](https://gokulramm.vercel.app/)**

🐙 GitHub:
👉 [https://github.com/Gokulramms/Cafe-Nostalgia-Ai](https://github.com/Gokulramms/Cafe-Nostalgia-Ai)

---
