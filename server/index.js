import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const COHERE_API_KEY = process.env.OPENAI_API_KEY;

app.post('/api/cohere-chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages format' });
  }

  try {
    const response = await fetch('https://api.cohere.ai/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${COHERE_API_KEY}`
      },
      body: JSON.stringify({
        model: 'command',
        message: messages[messages.length - 1].text,
        chat_history: messages.slice(0, -1).map(m => ({ role: m.from === 'user' ? 'USER' : 'CHATBOT', message: m.text }))
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: 'Cohere API error', details: data });
    }

    const reply = data.text || 'Sorry, I could not generate a response.';
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
