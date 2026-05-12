<div align="center">
  <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=200&q=80" alt="Nirvana Logo" width="120" style="border-radius: 50%; border: 2px solid #ff3333; margin-bottom: 20px;" />

  # ⚡ NirvanaMax AI Website Builder
  
  **The Next-Generation AI Studio for Instantly Synthesizing Production-Ready Web Interfaces.**

  [Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Folder Structure](#-folder-structure)
</div>

---

## 🌌 Overview
NirvanaMax is a premium, full-stack AI-powered IDE that allows users to generate fully responsive, highly interactive websites using natural language prompts. Utilizing the cutting-edge **OpenRouter API (GPT-4o)**, NirvanaMax generates production-ready code with embedded **Tailwind CSS** and **GSAP animations**. 

The application itself features a breathtaking "Deep Black & Crimson Red" editorial aesthetic, complete with frosted glassmorphism, Framer Motion background animations, and a real-time live preview engine.

---

## ✨ Features
- **🤖 AI-Powered Synthesis**: Generate entire single-page websites, hero sections, and SaaS dashboards instantly via text prompts.
- **💻 Live Studio IDE**: A split-pane workspace featuring an integrated code editor (Monaco) and a live interactive preview.
- **📱 Responsive Testing**: Toggle between Desktop, Tablet, and Mobile device frames directly within the Studio preview.
- **🎨 Premium Dark UI**: A meticulously crafted dark-mode aesthetic with blur effects, dynamic skull backgrounds, and glowing accents.
- **💾 History & Library**: Authenticated users can securely save their generated projects to their library and revisit their prompt history.
- **📥 One-Click Export**: Download your generated code instantly as a ready-to-deploy `.html` file.

---

## 🛠 Tech Stack

### Frontend
- **React (Vite)**: Fast, modern UI development.
- **Tailwind CSS**: Utility-first styling and glassmorphic UI components.
- **Framer Motion**: Fluid page transitions and floating background animations.
- **Monaco Editor**: VS Code's core editor powering the code view.
- **React Router DOM**: Seamless client-side routing.

### Backend
- **Node.js & Express**: Robust server architecture.
- **MongoDB & Mongoose**: Secure database for storing user credentials and prompt history.
- **JSON Web Tokens (JWT)**: Secure user authentication and session management.
- **OpenRouter API**: Communicating with `openai/gpt-4o` for unparalleled code generation capabilities.

---

## 🚀 Installation & Setup

### Prerequisites
Make sure you have **Node.js** and **MongoDB** installed on your system. You will also need an API key from [OpenRouter](https://openrouter.ai/).

### 1. Clone the Repository
```bash
git clone https://github.com/anuragsinghrajput123456789/Niravana-Ai-WebsiteBuilder-.git
cd NirvanaMax
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENROUTER_API_KEY=your_openrouter_api_key
```
Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```
Start the frontend development server:
```bash
npm run dev
```

The application will be running at `http://localhost:5173`.

---

## 📂 Folder Structure

```text
NirvanaMax/
├── frontend/                 # React Client Application
│   ├── src/
│   │   ├── api/              # Axios instances and API calls to backend
│   │   ├── components/       # Reusable UI elements (Navbar, Footer, Buttons)
│   │   ├── Pages/            # Main application views
│   │   │   ├── Home.jsx      # Landing Page
│   │   │   ├── Studio.jsx    # Core IDE & Generation Workspace
│   │   │   ├── Login.jsx     # Authentication
│   │   │   ├── Signup.jsx    # Authentication
│   │   │   ├── About.jsx     # Project Information
│   │   │   └── Contact.jsx   # Contact Form
│   │   ├── assets/           # Static assets, branding, and images
│   │   ├── App.jsx           # Route configuration
│   │   └── index.css         # Global CSS variables and Tailwind directives
│   ├── tailwind.config.js    # Tailwind configuration
│   └── package.json
│
├── backend/                  # Express/Node API Server
│   ├── controllers/          # Request handling logic
│   │   ├── aiController.js   # OpenRouter API communication logic
│   │   ├── authController.js # Login/Signup & JWT logic
│   │   └── chatController.js # History saving and retrieval
│   ├── middleware/           # Route protection and JWT verification
│   ├── models/               # MongoDB Database Schemas
│   ├── routes/               # API endpoint definitions
│   ├── server.js             # Server entry point and configuration
│   ├── .env                  # Environment variables
│   └── package.json
│
└── README.md                 # Project Documentation
```

---

## 🎨 Design Philosophy
NirvanaMax is built on a philosophy of "Dark Editorial." It avoids flat, generic dashboard designs in favor of deep contrasts, minimal borders, subtle glows (`drop-shadow-[0_0_30px_rgba(255,0,0,0.2)]`), and visceral background imagery. The interface feels less like a traditional software tool and more like a high-end creative engine.

---
<div align="center">
  <i>Developed with ❤️ for the future of AI-driven design.</i>
</div>
