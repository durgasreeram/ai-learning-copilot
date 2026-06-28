# Lumina – AI Learning Mentor

Lumina is an AI-powered learning mentor designed to provide personalized guidance, explain concepts, generate learning paths, and support students throughout their learning journey.

Unlike traditional AI chat applications, Lumina aims to evolve into a mentor that understands a learner's strengths, weaknesses, progress, and goals, delivering personalized educational support rather than generic responses.

---

## Vision

Most AI learning tools focus on generating content such as notes, quizzes, flashcards, and summaries.

Lumina's long-term goal is different:

* Understand how a student learns
* Identify weak concepts automatically
* Track learning progress over time
* Recommend what to learn next
* Adapt explanations based on student performance
* Act as a personal mentor instead of a simple chatbot

The objective is to build an AI system that helps students learn more effectively rather than simply providing answers.

---

## Current Features

### Authentication & Security

* User Registration
* User Login
* JWT Authentication
* Protected API Routes
* Password Hashing using BCrypt

### AI Learning Assistant

* AI-powered conversational learning interface
* Concept explanations
* Topic discussions
* Educational Q&A
* Personalized learning support

### Learning Workspace

* Modern SaaS-style dashboard
* Study-focused interface
* Persistent chat history architecture
* Learning-focused navigation

---

## Planned Features

### Intelligent Learning Mentor

* Personalized learning recommendations
* Weakness detection
* Learning pattern analysis
* Progress tracking
* Goal-based study planning
* Adaptive tutoring system

### Study Intelligence

* Concept mastery scoring
* Knowledge graph generation
* Learning path optimization
* Personalized revision schedules
* Skill-gap identification

### Learning Tools

* Quiz Generation
* Roadmap Generation
* Flashcards
* Code Explanation
* Study Notes
* Progress Analytics

### Future ML Features

* Student performance prediction
* Concept difficulty estimation
* Personalized recommendation engine
* Learning behavior clustering
* Knowledge retention modeling

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Axios
* Framer Motion

### Backend

* FastAPI
* Python
* SQLAlchemy
* PostgreSQL
* JWT Authentication

### AI

* Google Gemini API

---

## Architecture

Frontend (React + TypeScript)

↓

FastAPI Backend

↓

Authentication Layer (JWT)

↓

AI Service Layer (Gemini)

↓

PostgreSQL Database

---

## Project Structure

```text
frontend/
├── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── layouts/
│   ├── contexts/
│   └── theme/

app/
├── routers/
├── models/
├── schemas/
├── services/
├── utils/
└── database/
```

## Development Setup

### Backend

```bash
pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

### Frontend

```bash
npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Current Status

In Development

Completed:

* Authentication System
* FastAPI Backend Setup
* PostgreSQL Integration
* Gemini Integration
* AI Chat Interface
* Dashboard UI

In Progress:

* Chat History
* Learning Mentor System
* Personalized Recommendations

---

## Author

Durga Sreeram

B.Tech Electronics & Communication Engineering (ECE)
CBIT Hyderabad

Building Lumina with the goal of creating an AI mentor that helps students learn smarter, track progress, and receive personalized guidance throughout their educational journey.
