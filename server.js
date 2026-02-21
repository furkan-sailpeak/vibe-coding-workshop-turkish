const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API Route for generating prompt using Groq API
app.post('/api/generate', async (req, res) => {
    try {
        const { systemMsg, userMsg } = req.body;

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
                model: "llama-3.3-70b-versatile", // Using Llama 3 8B model as a solid default
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
