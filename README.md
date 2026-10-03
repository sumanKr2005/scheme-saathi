# 🎯 Scheme Saathi — India's First AI-Powered Scheme Navigator

> **Right Scheme, Right Time.**

India has 3000+ government schemes, but 99% of citizens don't know which one they're eligible for. **Scheme Saathi** solves this — an AI-powered platform that instantly finds all government schemes you qualify for.

---

## 🔗 Links

| | |
|---|---|
| 🌐 **Live App** | https://scheme-saathi-mu.vercel.app |
| ⚙️ **Backend API** | https://scheme-saathi-va1x.onrender.com |
| 📦 **GitHub Repo** | https://github.com/sumanKr2005/scheme-saathi |

---

## 💡 The Idea

India has 3000+ government schemes, but 99% of citizens don't know which one they're eligible for. Most people miss out on benefits they deserve.

So I built a solution.

---

## ✨ What It Does

- 🎯 User fills a simple profile (age, income, state, category)
- 🤖 AI instantly finds ALL eligible government schemes
- 📋 Shows complete details — benefits, documents, eligibility, apply link
- 💬 AI Chat assistant that answers ANY question about schemes
- 🎤 Voice input — speak in Hindi or English
- 🔊 AI replies in YOUR language with voice output
- ⚡ Real-time streaming responses (ChatGPT-style)
- 🌐 5 languages: English, Hindi, Kannada, Bengali, Marathi

---

## 🛠️ Tech Stack

### Backend
- Node.js + Express
- MongoDB Atlas — 50+ real government schemes
- Google Gemini AI — Multi-model fallback
- Server-Sent Events (SSE) — Real-time streaming
- JWT Authentication

### Frontend
- React 18 + Vite
- Tailwind CSS
- Web Speech API — Voice input/output
- React Router
- Context API

### Deployment
- Vercel — Frontend hosting
- Render — Backend hosting
- MongoDB Atlas — Cloud database

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| 🎯 Smart Scheme Matching | Profile-based eligibility filtering |
| 🤖 AI Chat | Context-aware answers |
| 🎤 Voice Input | Speak in Hindi or English |
| 🔊 Voice Output | Listen to AI responses |
| ⚡ Real-time Streaming | ChatGPT-style live responses |
| 🧠 Intent Detection | Handles greetings, thanks, questions |
| 💡 Smart Suggestions | Follow-up questions after every answer |
| 📊 Profile Personalization | Tailored to user's profile |
| 🎯 Count Detection | "1 scheme batao" → gives 1 |
| 🛡️ 99% Uptime | 5 Gemini model fallbacks |
| 📱 Fully Responsive | Works on mobile & desktop |
| 🌐 Multilingual | 5 Indian languages |

---

## 🎯 How It Works

1. User fills profile — Age, state, income, category, occupation
2. Backend filters schemes — MongoDB query matches eligibility
3. Results displayed — Benefits, documents, eligibility, apply link
4. AI Chat — Ask questions, get context-aware answers
5. Voice interaction — Speak question, hear answer

---

## 📂 Project Structure
scheme-saathi/
├── client/ # React frontend (Vercel)
└── server/ # Node.js backend (Render)


---

## 🚀 Local Setup

### Backend
```bash
cd server
npm install
npm run dev

###Frontend
```bash
cd client
npm install
npm run dev

👨‍💻 Author
Suman Kumar munu (@sumanKr2005)

Built during an internship task — became my first real solo full-stack AI product. 🚀

