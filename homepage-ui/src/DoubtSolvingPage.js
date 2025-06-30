import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dropdown from './Dropdown';
import { sendChatMessage } from './utils/api';
import { getRolePrompt } from './config';
import './DoubtSolvingPage.css';

const standards = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
const subjects = ['Maths', 'Science', 'English', 'Social Science'];

export default function DoubtSolvingPage() {
  const navigate = useNavigate();
  const [standard, setStandard] = useState('');
  const [subject, setSubject] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showSidePanel, setShowSidePanel] = useState(!isMobile);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setShowSidePanel(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleStartChat = () => {
    if (standard && subject) {
      setIsChatStarted(true);
      const rolePrompt = getRolePrompt(parseInt(standard), subject);
      setMessages([
        {
          type: 'ai',
          content: `Hello! I'm your ${subject} tutor for Standard ${standard}. I'll help you understand the concepts better. What would you like to know?`,
          timestamp: new Date().toISOString()
        }
      ]);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    try {
      const rolePrompt = getRolePrompt(parseInt(standard), subject);
      const response = await sendChatMessage([...messages, userMessage], rolePrompt);
      const aiMessage = {
        type: 'ai',
        content: response,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        type: 'ai',
        content: 'I apologize, but I encountered an error. Please try again.',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleVoiceInput = () => {
    alert('Voice input feature coming soon!');
  };

  const handleExplainAgain = (messageIndex) => {
    const aiMessage = {
      type: 'ai',
      content: `Let me explain that again in a different way...`,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, aiMessage]);
  };

  const handleSimplify = (messageIndex) => {
    const aiMessage = {
      type: 'ai',
      content: `Here's a simpler explanation...`,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, aiMessage]);
  };

  const handleConsultTeacher = () => {
    navigate('/one-on-one-sessions');
  };

  return (
    <div className="doubt-solving-page">
      <Navbar />
      <div className="doubt-solving-content">
        {!isChatStarted ? (
          <div className="subject-selector">
            <h1>Ask Your Doubts</h1>
            <p>Select your standard and subject to get started</p>
            <ul className="instructions">
              <li>📘 Select your standard and subject</li>
              <li>✏️ Type your question</li>
              <li>📩 Click "Start Chat"</li>
              <li>📖 View the solution and ask more</li>
            </ul>
            <div className="selector-form">
              <Dropdown label="Standard" value={standard} onChange={setStandard} options={standards} />
              <Dropdown label="Subject" value={subject} onChange={setSubject} options={subjects} />
              <button className="start-chat-btn" onClick={handleStartChat} disabled={!standard || !subject}>
                Start Chat
              </button>
            </div>
          </div>
        ) : (
          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  <div className="message-content">
                    {message.content}
                    {message.type === 'ai' && (
                      <div className="message-actions">
                        <button onClick={() => handleExplainAgain(index)}>🔄 Explain Again</button>
                        <button onClick={() => handleSimplify(index)}>🎯 Simplify</button>
                        <button onClick={() => handleConsultTeacher()}>🧑‍🏫 Consult a Teacher</button>
                      </div>
                    )}
                  </div>
                  <div className="message-timestamp">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-tip">
              💡 Tip: Be specific with your question, like "What is a noun?" or "Explain photosynthesis in short."
            </div>

            <form className="chat-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your doubt here..."
              />
              <button type="button" className="voice-input-btn" onClick={handleVoiceInput}>🎤</button>
              <button type="submit" className="send-btn">Send</button>
            </form>
          </div>
        )}

        {showSidePanel && (
          <div className="side-panel">
            <h3>Recent Questions</h3>
            <div className="recent-questions">
              {messages.filter(m => m.type === 'user').map((message, index) => (
                <div key={index} className="recent-question">
                  {message.content}
                </div>
              ))}
            </div>
            <button className="save-notes-btn">📝 Save as Notes</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
