const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Trust the first proxy (Railway) for accurate client IP tracking (rate limiting)
app.set('trust proxy', 1);

// Security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

// Configure CORS
const allowedOrigins = ['http://localhost:3000', 'https://vibes101.org', 'https://www.vibes101.org'];
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps, curl, or same-origin)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Rate limiter for /api/generate
const generateLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests. Please try again later.' },
});

// API Route for generating prompt using Groq API
app.post('/api/generate', generateLimiter, async (req, res) => {
    try {
        const { systemMsg, userMsg } = req.body;

        // Request validation
        if (!systemMsg || typeof systemMsg !== 'string' || !systemMsg.trim()) {
            return res.status(400).json({ error: 'systemMsg is required and must be a non-empty string.' });
        }
        if (!userMsg || typeof userMsg !== 'string' || !userMsg.trim()) {
            return res.status(400).json({ error: 'userMsg is required and must be a non-empty string.' });
        }

        if (!process.env.GROQ_API_KEY) {
            throw new Error("GROQ_API_KEY is missing from environment variables.");
        }

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: systemMsg },
                    { role: "user", content: userMsg }
                ],
                temperature: 0.7,
                max_tokens: 2000
            })
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Groq API Error:', errorData);
            throw new Error(`Groq API error: ${response.status}`);
        }

        const data = await response.json();
        res.json({ result: data.choices[0].message.content });

    } catch (error) {
        console.error('Error generating prompt:', error);
        res.status(500).json({ error: 'Failed to generate prompt' });
    }
});

// Always return index.html for unknown routes (for potential SPA handling)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
