import React from 'react';
import '../components/Section.css';
import './HowItWorks.css';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Ask Your Doubts',
    desc: 'Just type your question in simple language — EduChat understands and responds instantly.',
    icon: '💬',
    img: 'https://img.freepik.com/free-vector/ask-question-concept-illustration_114360-1512.jpg',
    bg: '#e3f6fd'
  },
  {
    title: 'Pick Your Class & Subject',
    desc: 'EduChat customizes responses based on your grade and subject, giving age-appropriate, clear explanations.',
    icon: '📚',
    img: 'https://img.freepik.com/free-vector/online-lesson-concept-illustration_114360-4764.jpg',
    bg: '#ffe0b2'
  },
  {
    title: 'Revise with Flashcards',
    desc: 'Use our interactive flashcard feature to review key concepts, definitions, and formulas.',
    icon: '🃏',
    img: 'https://img.freepik.com/free-vector/flashcard-concept-illustration_114360-1506.jpg',
    bg: '#d1f2eb'
  },
  {
    title: 'Study With Guides',
    desc: 'Access free downloadable textbooks, chapter-wise notes, answer keys, and solved papers for your class.',
    icon: '📖',
    img: 'https://img.freepik.com/free-vector/reading-book-concept-illustration_114360-1604.jpg',
    bg: '#fce4ec'
  },
  {
    title: 'Book 1-on-1 Help',
    desc: 'Need personal guidance? Book a one-on-one session with a mentor based on your topic and schedule.',
    icon: '📅',
    img: 'https://img.freepik.com/free-vector/appointment-booking-with-calendar-concept-illustration_114360-1496.jpg',
    bg: '#fff9c4'
  }
];

const HowItWorks = () => (
  <div className="howitworks-bg">
    <h2 className="howitworks-title">How It Works</h2>
    <div className="howitworks-steps">
      {steps.map((step, idx) => (
        <div className="howitworks-step-card" style={{background: step.bg}} key={step.title}>
          <div className="howitworks-step-indicator">{idx + 1}</div>
          <div className="howitworks-step-content">
            <div className="howitworks-step-icon" aria-label={step.title}>{step.icon}</div>
            <div>
              <div className="howitworks-step-title">{step.title}</div>
              <div className="howitworks-step-desc">{step.desc}</div>
            </div>
          </div>
          <div className="howitworks-step-img">
            <img src={step.img} alt={step.title} />
          </div>
        </div>
      ))}
    </div>
    <div className="howitworks-cta-row">
      <Link to="/signup" className="howitworks-cta-btn">Get Started</Link>
    </div>
  </div>
);

export default HowItWorks; 