const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// CORS — allow frontend dev server and production origins
// Set FRONTEND_URL in your Render environment variables (e.g. https://nirvanamax.vercel.app)
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    process.env.FRONTEND_URL,
].filter(Boolean).map(origin => origin.replace(/\/$/, "")); // Normalize: remove trailing slashes

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (curl, Postman, server-to-server)
        if (!origin) return callback(null, true);
        
        const normalizedOrigin = origin.replace(/\/$/, "");
        if (allowedOrigins.includes(normalizedOrigin)) {
            callback(null, true);
        } else {
            console.warn(`CORS blocked for origin: ${origin}`);
            callback(null, false); // Don't throw error, just don't allow
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Health check route
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'NirvanaMax API is running' });
});

// Routes
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const aiRoutes   = require('./routes/aiRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/ai',   aiRoutes);

// Global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.message);
    res.status(500).json({ message: err.message || 'Internal Server Error' });
});

// Connect to MongoDB, then start server
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connected');
        app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.error('❌ MongoDB connection failed:', err.message);
        process.exit(1);
    });
