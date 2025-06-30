import React, { useState } from 'react';
import '../components/Section.css';
import './FAQ.css';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Who can use EduChat?',
    answer: "EduChat is designed for students in classes 1 to 10 from all boards. It's free and easy to use.",
    icon: '🎓'
  },
  {
    question: 'Is EduChat really free?',
    answer: "Yes! All our core features like AI doubt solving, study guides, and flashcards are completely free.",
    icon: '💸'
  },
  {
    question: 'Can I ask questions in any subject?',
    answer: "You can ask questions from Science, Math, English, SST, and more — we're continuously adding support for new subjects.",
    icon: '📚'
  },
  {
    question: 'Does it require login?',
    answer: "You can explore many features without login. For tracking your sessions and saving your flashcards, creating a free account is helpful.",
    icon: '🔑'
  },
  {
    question: 'How accurate are the AI answers?',
    answer: "EduChat uses advanced AI models trained to give clear, age-appropriate responses based on your class and subject.",
    icon: '🤖'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="section">
      <div className="section-content">
        <div className="section-text" style={{width: '100%'}}>
          <h2 style={{marginBottom: '2rem'}}>Frequently Asked Questions</h2>
          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div
                className={`faq-card${openIndex === idx ? ' open' : ''}`}
                key={faq.question}
                onClick={() => handleToggle(idx)}
                tabIndex={0}
                role="button"
                aria-expanded={openIndex === idx}
              >
                <div className="faq-question-row">
                  <span className="faq-icon">{faq.icon}</span>
                  <span className="faq-question">{faq.question}</span>
                  <span className={`faq-arrow${openIndex === idx ? ' open' : ''}`}>▼</span>
                </div>
                <div className="faq-answer" style={{maxHeight: openIndex === idx ? '200px' : '0'}}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-contact-row">
            <span>Didn't find what you were looking for?</span>
            <Link to="/contact" className="faq-contact-link">Contact Us</Link>
          </div>
        </div>
        <div className="section-image" style={{display: 'flex', alignItems: 'center'}}>
          <img src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg" alt="FAQ" style={{maxWidth: 350, width: '100%'}} />
        </div>
      </div>
    </div>
  );
};

export default FAQ; 