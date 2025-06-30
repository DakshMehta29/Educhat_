import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AIChatSupport.css';
import { sendChatMessage } from './utils/api';

export default function AIChatSupport() {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Hi! I am your AI Study Assistant. How can I help you today?',
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      content: input,
      time: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const rolePrompt = `You are a helpful and friendly tutor for school students (grades 1 to 10). Only answer academic and technical questions from school subjects like Math, Science, English, SST. Politely decline any off-topic or personal questions. ${
        input.toLowerCase().includes('make it short') ? 'Keep the response brief and simple.' : ''
      }`;

      const aiReply = await sendChatMessage([...messages, userMessage], rolePrompt);

      setMessages(prev => [
        ...prev,
        {
          type: 'ai',
          content: aiReply,
          time: new Date().toLocaleTimeString()
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          type: 'ai',
          content: 'Sorry, there was an error getting a response.',
          time: new Date().toLocaleTimeString()
        }
      ]);
    }
  }

  return (
    <div className="ai-chat-page">
      <div className="ai-chat-header">
        <Link to="/" className="ai-chat-back">&#8592; Back to Home</Link>
        <h1>AI Chat Support</h1>
        <p className="ai-chat-desc">
          Get instant answers to your academic questions. Our AI is available 24/7 to help you succeed!
        </p>
        <ul className="ai-usage-guide">
          <li>📘 Type your question in the input field</li>
          <li>🕹️ Press Enter or click Send</li>
          <li>🤖 Wait for the AI response</li>
          <li>💬 Continue the conversation</li>
        </ul>
      </div>

      <div className="ai-chat-container">
        <div className="ai-chat-area">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-chat-msg ${msg.type}`}>
              <div className="msg-bubble">
                {msg.content}
                <div className="msg-time">{msg.time}</div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <form className="ai-chat-form" onSubmit={handleSend} autoComplete="off">
          <input
            className="ai-chat-input"
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className="ai-chat-send" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
