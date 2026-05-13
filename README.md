<div align="center">
  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80" alt="Nirvana Logo" style="border-radius: 20px; border: 2px solid #ff3333; margin-bottom: 20px; box-shadow: 0 0 30px rgba(255,51,51,0.3);" />

  # ⚡ NirvanaMax AI Studio
  
  **The Next-Generation AI Engine for Instantly Synthesizing Production-Ready Web Interfaces.**

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
  [![OpenRouter API](https://img.shields.io/badge/OpenRouter-API-FF3333?style=for-the-badge)](https://openrouter.ai/)

  [Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Design Philosophy](#-design-philosophy)
</div>

---

## 🌌 Overview

**NirvanaMax** is a premium, full-stack AI-powered IDE that empowers users to generate fully responsive, highly interactive websites using natural language prompts. Utilizing the cutting-edge **OpenRouter API (GPT-4o)**, NirvanaMax generates production-ready code with embedded **Tailwind CSS** and **GSAP animations**. 

The application features a breathtaking "Deep Black & Crimson Red" editorial aesthetic, complete with frosted glassmorphism, Framer Motion scroll animations, and an advanced real-time live preview engine.

---

## ✨ Features

- **🤖 AI-Powered Synthesis**: Generate entire single-page websites, complex hero sections, and sleek SaaS dashboards instantly via text prompts.
- **🔄 Iterative Updating**: *[NEW]* Modify your generated components seamlessly! Just type a new instruction like "change the background to dark red" and hit **Update Code**.
- **💻 Live Studio IDE**: A split-pane workspace featuring an integrated code editor (Monaco) and a live interactive preview canvas.
- **📱 Responsive Testing**: Toggle between Desktop, Tablet, and Mobile device frames directly within the Studio preview to ensure flawless responsiveness.
- **🎨 Premium Dark UI**: A meticulously crafted dark-mode aesthetic with blur effects, dynamic skull background interactions, and glowing crimson accents.
- **💾 History & Library**: Authenticated users can securely save their generated projects to their library and revisit their prompt history.
- **📥 One-Click Export**: Download your generated code instantly as a ready-to-deploy `.html` file.
- **🔒 Secure Authentication**: Robust JWT-based authentication system backed by MongoDB to protect your data and projects.

---

## 🛠 Tech Stack

| Domain | Technologies |
| --- | --- |
| **Frontend** | React (Vite), Tailwind CSS, Framer Motion, Monaco Editor, GSAP |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JSON Web Tokens (JWT), bcryptjs |
| **AI Integration** | OpenRouter API (`openai/gpt-4o`) |

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
Navigate to the backend directory and install dependencies:
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
Navigate to the frontend directory and install dependencies:
```bash
cd ../frontend
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
│   │   ├── Components/       # Reusable UI elements (Navbar, Footer, Buttons)
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
NirvanaMax is built on a philosophy of **"Dark Editorial."** It avoids flat, generic dashboard designs in favor of deep contrasts, minimal borders, subtle glows (`drop-shadow-[0_0_30px_rgba(255,0,0,0.2)]`), and visceral interactive background imagery. The interface feels less like a traditional software tool and more like a high-end creative engine.

---
<div align="center">
  <i>Engineered with ❤️ for the future of AI-driven design.</i>
</div>
