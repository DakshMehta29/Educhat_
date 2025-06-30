import React, { useState, useEffect, useCallback } from 'react';
import './FlashcardsPage.css';
import Flashcard from './Flashcard';
import Dropdown from './Dropdown';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const standards = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
const subjects = ['Maths', 'Science', 'English', 'Social Science'];
const chaptersData = {
  Maths: ['Numbers', 'Addition', 'Subtraction', 'Multiplication'],
  Science: ['Plants', 'Animals', 'Water', 'Air'],
  English: ['Grammar', 'Stories', 'Poems'],
  'Social Science': ['History', 'Geography', 'Civics'],
};
const dummyCards = [
  { q: 'What is 2 + 2? 😊', a: '4' },
  { q: 'What planet do we live on? 🌍', a: 'Earth' },
  { q: 'Who is the father of our nation? 🇮🇳', a: 'Mahatma Gandhi' },
  { q: 'What is H2O commonly known as? 💧', a: 'Water' },
  { q: 'Name a noun in this sentence: "The cat sat on the mat." 🐱', a: 'cat, mat' },
  { q: 'What is 5 x 3? ✖️', a: '15' },
];
const tips = [
  'Tip: Tap or click the card to flip it! 🔄',
  'Did you know? Practice makes perfect! 💡',
  'Try shuffling the cards for a new order! 🔀',
  'Use the arrows or your keyboard to move between cards! ⬅️➡️',
];

export default function FlashcardsPage() {
  const [standard, setStandard] = useState('1');
  const [subject, setSubject] = useState(subjects[0]);
  const [chapter, setChapter] = useState(chaptersData[subjects[0]][0]);
  const [current, setCurrent] = useState(0);
  const [cards, setCards] = useState(dummyCards);
  const [originalCards] = useState(dummyCards);
  const [tip, setTip] = useState(tips[0]);

  // Update chapter when subject changes
  useEffect(() => {
    setChapter(chaptersData[subject][0]);
  }, [subject]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  }, [cards, current]);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  function handleShuffle(e) {
    if (e) e.preventDefault();
    setCards(prev => [...prev].sort(() => Math.random() - 0.5));
    setCurrent(0);
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  }
  function handleReset(e) {
    if (e) e.preventDefault();
    setCards([...originalCards]);
    setCurrent(0);
    setTip(tips[0]);
  }
  function handlePrev(e) {
    if (e) e.preventDefault();
    setCurrent(c => (c - 1 + cards.length) % cards.length);
  }
  function handleNext(e) {
    if (e) e.preventDefault();
    setCurrent(c => (c + 1) % cards.length);
  }

  // Progress dots
  function ProgressDots() {
    return (
      <div className="fc-dots">
        {cards.map((_, i) => (
          <span key={i} className={i === current ? 'fc-dot active' : 'fc-dot'} />
        ))}
      </div>
    );
  }

  return (
    <div className="flashcards-page">
      <Navbar />
      <div className="flashcards-content">
        <div className="flashcards-header">
          <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_1280.png" alt="EduChat Mascot" className="fc-mascot" />
          <h1>📚 Flashcards</h1>
          <p>Welcome! Practice and learn with interactive flashcards. Select your standard, subject, and chapter to get started.</p>
        </div>
        <form className="flashcards-form">
          <Dropdown label="Standard" value={standard} onChange={setStandard} options={standards} />
          <Dropdown label="Subject" value={subject} onChange={setSubject} options={subjects} />
          <Dropdown label="Chapter" value={chapter} onChange={setChapter} options={chaptersData[subject]} />
        </form>
        <div className="flashcards-carousel">
          <button className="fc-btn" onClick={handlePrev} aria-label="Previous">&#8592;</button>
          {cards.length > 0 ? (
            <Flashcard key={current} question={cards[current].q} answer={cards[current].a} />
          ) : (
            <div className="fc-empty">No flashcards found for this selection.</div>
          )}
          <button className="fc-btn" onClick={handleNext} aria-label="Next">&#8594;</button>
        </div>
        <div className="fc-progress">{cards.length > 0 ? `${current + 1} / ${cards.length}` : '0 / 0'}</div>
        <div className="fc-control-buttons">
          <button className="fc-btn shuffle" onClick={handleShuffle}>
            🔀 Shuffle
          </button>
          <button className="fc-btn reset" onClick={handleReset}>
            ♻️ Reset
          </button>
        </div>
        <div className="fc-tip">{tip}</div>
      </div>
      <Footer />
    </div>
  );
} 