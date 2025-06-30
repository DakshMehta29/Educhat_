import React from 'react';
import '../components/Section.css';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const timeline = [
  { year: '2022', event: 'EduChat idea born in a classroom.' },
  { year: '2023', event: 'Beta launched with AI chat and flashcards.' },
  { year: '2024', event: 'Study guides, 1-on-1 sessions, and more added.' },
];

const pillars = [
  {
    icon: '🌍',
    title: 'Accessibility',
    desc: 'Free, easy-to-use tools for every student, everywhere.'
  },
  {
    icon: '🎮',
    title: 'Engagement',
    desc: 'Interactive chat, flashcards, and fun learning journeys.'
  },
  {
    icon: '✨',
    title: 'Personalization',
    desc: 'AI adapts to your grade, subject, and learning style.'
  }
];

const AboutUs = () => (
  <div className="aboutus-bg">
    <div className="aboutus-mission-card">
      <div className="aboutus-hero-row">
        <div className="aboutus-hero-icon animate-bounce">🤖</div>
        <div>
          <h2 className="aboutus-title">About EduChat</h2>
          <p className="aboutus-mission">EduChat is a smart virtual study companion designed for school students from grades 1 to 10. Our mission is to make learning accessible, engaging, and personalized for every child. Whether it's clearing doubts, revising with flashcards, or accessing free study material, EduChat empowers students to take charge of their academic journey.</p>
        </div>
      </div>
      <p className="aboutus-desc">We believe that the right guidance at the right time can transform a student's confidence and performance. With AI-powered chat support, subject-specific study guides, and one-on-one learning options, EduChat is here to make everyday learning simpler and smarter.</p>
      <p className="aboutus-desc">Our team consists of passionate educators and tech enthusiasts committed to bridging the gap between curiosity and clarity — one question at a time.</p>
    </div>

    <div className="aboutus-timeline-section">
      <h3 className="aboutus-section-heading">Our Journey</h3>
      <div className="aboutus-timeline">
        {timeline.map((item, idx) => (
          <div className="aboutus-timeline-item" key={item.year}>
            <div className="aboutus-timeline-dot animate-pulse" style={{background: ['#a3e4f9','#ffe0b2','#d1f2eb'][idx%3]}}></div>
            <div className="aboutus-timeline-content">
              <div className="aboutus-timeline-year">{item.year}</div>
              <div className="aboutus-timeline-event">{item.event}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="aboutus-pillars-section">
      <h3 className="aboutus-section-heading">Our Pillars</h3>
      <div className="aboutus-pillars-row">
        {pillars.map(pillar => (
          <div className="aboutus-pillar-card" key={pillar.title}>
            <div className="aboutus-pillar-icon animate-bounce" aria-label={pillar.title}>{pillar.icon}</div>
            <div className="aboutus-pillar-title">{pillar.title}</div>
            <div className="aboutus-pillar-desc">{pillar.desc}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="aboutus-cta-card">
      <h3>Ready to make learning fun and easy?</h3>
      <Link to="/signup" className="aboutus-cta-btn">Try EduChat Now</Link>
    </div>
  </div>
);

export default AboutUs; 