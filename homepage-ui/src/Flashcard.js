import React, { useState } from 'react';
import './Flashcard.css';

export default function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`fc-card${flipped ? ' flipped' : ''}`} onClick={() => setFlipped(f => !f)} tabIndex={0} aria-pressed={flipped} role="button">
      <div className="fc-card-inner">
        <div className="fc-card-front">
          <span className="fc-q">{question}</span>
        </div>
        <div className="fc-card-back">
          <span className="fc-a">{answer}</span>
        </div>
      </div>
    </div>
  );
} 