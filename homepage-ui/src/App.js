import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import './TestimonialCarousel.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AIChatSupport from './AIChatSupport';
import FlashcardsPage from './FlashcardsPage';
import DoubtSolvingPage from './DoubtSolvingPage';
import StudyGuidesPage from './StudyGuidesPage';
import OneOnOneSessionsPage from './OneOnOneSessionsPage';
import SignUpPage from './SignUpPage';
import AboutUs from './Pages/AboutUs';
import HowItWorks from './Pages/HowItWorks';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact';

function App() {
  // Always clear authentication on app load
  localStorage.removeItem('isAuthenticated');

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/signup" replace />;
    }
    return children;
  };

  // Home page component
  const HomePage = () => (
    <>
      <Navbar />
      <Section
        title="Your AI Study Assistant is Here!"
        description="Get instant answers and clear all your academic doubts with EduChat. Our AI-powered platform provides 24/7 support, a comprehensive study guide, and personalized assistance to help you excel in your studies. Sign up now and experience the future of learning!"
        image="https://servisbot.com/wp-content/uploads/2020/06/Ai-assistant-automates-customer-journeys.jpg"
        learnMoreLink="#focus"
        dark={false}
        reverse={true}
      />
      {/* Discover EduChat's Mission Section */}
      <Section
        title="Discover EduChat's Mission"
        description="At EduChat, we strive to empower students by providing a reliable AI-based study assistant that enhances learning experiences. Our commitment to innovation and accessibility ensures that every student can achieve their academic goals."
        image="https://img.freepik.com/premium-photo/online-class-teamwork-building-new-business-ideas_1029476-452053.jpg"
        learnMoreLink="#flashcards"
        dark={true}
        reverse={false}
        hideLearnMore={true}
        stats={[
          {
            value: 100,
            suffix: ' %',
            description: 'We aim to reach 100% student satisfaction through our dedicated support and resources.'
          },
          {
            value: 5000,
            label:'students',
            description: 'Since our launch, we have successfully assisted over 5,000 students in their academic journeys.'
          },
          {
            value: 10,
            label:'values',
            description: 'Our core values include Innovation, Accessibility, Student-Centric Approach, and Integrity, guiding us in our mission.'
          },
          {
            value: 3,
            label: 'team members',
            description: 'Our dedicated team consists of 3 passionate individuals committed to enhancing the EduChat experience.'
          }
        ]}
      />
      {/* AI Chat Support Section */}
      <Section
        title={<span>Get <b><i>Instant Answers</i></b> with Our AI Chat Support</span>}
        description={<>
          EduChat's AI Chat Support provides instant and accurate answers to your academic queries, 24/7. Our user-friendly interface ensures a seamless learning experience, helping you navigate your studies with ease. Get the support you need, whenever you need it.
          <ul className="feature-list">
            <li>🕑 24/7 Availability: Get instant support anytime.</li>
            <li>💬 Quick Responses: Accurate answers to your questions.</li>
            <li>🌟 User-Friendly: Enhances your learning experience.</li>
          </ul>
        </>}
        image="https://www.eschoolnews.com/files/2024/11/AI-students-critical-thinking-creativity.jpeg"
        learnMoreLink="#focus"
        dark={false}
        reverse={true}
        chatNowButton={true}
      />
      {/* Book One-on-One Sessions with Our Experts Section */}
      <Section
        title="Book One-on-One Sessions with Our Experts"
        description="Need personalized guidance or academic mentoring? EduChat now offers dedicated one-on-one sessions with qualified subject experts. Whether you're preparing for exams, stuck on tough concepts, or need career advice — our mentors are here to help you every step of the way. Schedule a session at your convenience and get the focused support you deserve."
        image="https://cdn.pixabay.com/photo/2020/08/25/11/20/video-call-5512754_1280.jpg"
        learnMoreLink="/one-on-one-sessions"
        dark={true}
        reverse={false}
      />

      {/* Doubt Solving Section */}
      <Section
        title={<>
          <div style={{fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '0.5rem'}}>INSTANT CLARITY</div>
          <div style={{fontWeight: 800, fontSize: '2.8rem', lineHeight: 1.1}}>Conquer Every Academic<br/>Challenge</div>
        </>}
        description={<>
          With EduChat's Doubt Solving feature, students can submit their academic questions and receive detailed explanations, ensuring clarity and understanding of complex topics. Our AI-powered system provides personalized assistance tailored to individual needs, fostering independent learning and critical thinking. Say goodbye to confusion and hello to academic success!
          <div style={{marginTop: '2rem'}}>
            <a href="/doubt-solving" className="learn-more" style={{background: 'transparent', color: '#16a085', border: '2px solid #16a085'}}>Ask Your Doubts</a>
          </div>
        </>}
        image="https://img.freepik.com/premium-photo/elearning-smart-little-boy-headphones-using-laptop-while-studying-online-sitting-table_386185-1140.jpg"
        learnMoreLink="#learn"
        dark={false}
        reverse={true}
        hideLearnMore={true}
      />
      <div style={{background: '#f5f6fa', padding: '3.5rem 0'}}>
        <div style={{maxWidth: '1300px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', padding: '0 2rem'}}>
          <div style={{flex: '1 1 420px', minWidth: '320px'}}>
            <div style={{fontWeight: 800, fontSize: '3rem', lineHeight: 1.1, marginBottom: '1.2rem'}}>
              Ace Your Exams with <span style={{fontStyle: 'italic'}}>EduChat's</span> Interactive Flashcards!
            </div>
          </div>
          <div style={{flex: '1 1 420px', minWidth: '320px', display: 'flex', alignItems: 'center'}}>
            <div style={{fontSize: '1.3rem', lineHeight: 1.6}}>
              Prepare for your exams effectively with EduChat's interactive flashcards. Our flashcards cover a wide range of subjects and topics, helping you reinforce your knowledge and improve your understanding. Click to flip and test yourself!
            </div>
          </div>
        </div>
        <div style={{maxWidth: '1300px', margin: '2.5rem auto 0 auto', display: 'flex', justifyContent: 'center', gap: '2.5rem', padding: '0 2rem', flexWrap: 'wrap'}}>
          <div style={{background: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', padding: '2.2rem 2rem 2.5rem 2rem', flex: '1 1 340px', minWidth: '320px', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <div style={{fontWeight: 700, fontSize: '2rem', marginBottom: '1.1rem'}}>AI Chat Support Flashcards</div>
            <div style={{fontSize: '1.1rem', marginBottom: '2.2rem'}}>Test your knowledge of EduChat's AI Chat Support. These flashcards cover key features and benefits, helping you understand how our AI can assist you.</div>
            <a href="flashcards" className="learn-more" style={{background: 'transparent', color: '#16a085', border: '2px solid #16a085'}}>Learn More</a>
          </div>
          <div style={{background: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', padding: '2.2rem 2rem 2.5rem 2rem', flex: '1 1 340px', minWidth: '320px', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <div style={{fontWeight: 700, fontSize: '2rem', marginBottom: '1.1rem'}}>Doubt Solving Flashcards</div>
            <div style={{fontSize: '1.1rem', marginBottom: '2.2rem'}}>Master the art of doubt solving with EduChat's flashcards. Learn how to effectively submit your questions and receive detailed explanations to clarify your understanding.</div>
            <a href="flashcards" className="learn-more" style={{background: 'transparent', color: '#16a085', border: '2px solid #16a085'}}>Learn More</a>
          </div>
          <div style={{background: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', padding: '2.2rem 2rem 2.5rem 2rem', flex: '1 1 340px', minWidth: '320px', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <div style={{fontWeight: 700, fontSize: '2rem', marginBottom: '1.1rem'}}>Study Guide Flashcards</div>
            <div style={{fontSize: '1.1rem', marginBottom: '2.2rem'}}>Explore EduChat's comprehensive study guide with these flashcards. Discover resources, tips, and strategies to help you excel in your studies and achieve your academic goals.</div>
            <a href="/study-guides" className="learn-more" style={{background: 'transparent', color: '#16a085', border: '2px solid #16a085'}}>Explore Guides</a>
          </div>
        </div>
      </div>
      {/* Testimonial Carousel Section */}
      <div style={{background: '#f5f6fa', padding: '4rem 0'}}>
        <TestimonialCarousel />
      </div>
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route path="/signup" element={
        isAuthenticated ? <Navigate to="/" replace /> : <SignUpPage setIsAuthenticated={setIsAuthenticated} />
      } />
      <Route path="/" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
      <Route path="/ai-chat" element={
        <ProtectedRoute>
          <AIChatSupport />
        </ProtectedRoute>
      } />
      <Route path="/flashcards" element={
        <ProtectedRoute>
          <FlashcardsPage />
        </ProtectedRoute>
      } />
      <Route path="/doubt-solving" element={
        <ProtectedRoute>
          <DoubtSolvingPage />
        </ProtectedRoute>
      } />
      <Route path="/study-guides" element={
        <ProtectedRoute>
          <StudyGuidesPage />
        </ProtectedRoute>
      } />
      <Route path="/one-on-one-sessions" element={
        <ProtectedRoute>
          <OneOnOneSessionsPage />
        </ProtectedRoute>
      } />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

// Testimonial Carousel Component
function TestimonialCarousel() {
  const testimonials = [
    {
      image: 'https://assets.grok.com/users/53925acf-5f2a-43ef-a66e-137c2e386dad/generated/aeHE6xHSecygjRT9/image.jpg',
      stars: 5,
      text: "EduChat has transformed my study routine! The instant answers to my questions have made learning so much easier and more enjoyable. I can't imagine studying without it now.",
      name: 'Sarah Johnson',
      role: 'Student',
    },
    {
      image: 'https://assets.grok.com/users/53925acf-5f2a-43ef-a66e-137c2e386dad/generated/mW4qV3rFGE0cxMPT/image.jpg',
      stars: 4.5,
      text: "As a parent, I love how EduChat supports my child's learning. The platform is safe, reliable, and has boosted my child's confidence in academics.",
      name: 'Priya Sharma',
      role: "Sarah's Mother",
    },
    {
      image: 'https://img.freepik.com/premium-photo/portrait-happy-mother-helping-her-son-homework_251859-1088.jpg',
      stars: 4,
      text: "EduChat's flashcards and instant support have made revision so much easier for my son. Highly recommended for all students!",
      name: 'Ravi Patel',
      role: "Parent",
    },
    {
      image: 'https://assets.grok.com/users/53925acf-5f2a-43ef-a66e-137c2e386dad/generated/rzcI97ogcXekr7ys/image.jpg',
      stars: 5,
      text: "The interactive flashcards are a game changer! I scored much higher in my exams thanks to EduChat.",
      name: 'Emily Carter',
      role: 'Student',
    },
    {
      image: 'https://assets.grok.com/users/53925acf-5f2a-43ef-a66e-137c2e386dad/generated/FifQ7QD4Qcv7x7lF/image.jpg',
      stars: 4.5,
      text: "I love how easy it is to get help with my doubts. The answers are clear and quick!",
      name: 'Aarav Singh',
      role: 'Student',
    },
    {
      image: 'https://img.freepik.com/premium-photo/happy-female-student-using-laptop-home_251859-1085.jpg',
      stars: 4,
      text: "EduChat is a great study companion. The support team is also very responsive.",
      name: 'Mia Chen',
      role: 'Student',
    },
    {
      image: 'https://img.freepik.com/premium-photo/portrait-happy-mother-helping-her-son-homework_251859-1088.jpg',
      stars: 5,
      text: "My daughter has become more confident in her studies. Thank you, EduChat!",
      name: 'Linda Brown',
      role: 'Parent',
    },
    {
      image: 'https://img.freepik.com/premium-photo/young-girl-using-laptop-study-home_251859-1086.jpg',
      stars: 4.5,
      text: "The explanations are detailed and easy to understand. I recommend EduChat to all my friends.",
      name: 'Sofia Rossi',
      role: 'Student',
    },
    {
      image: 'https://assets.grok.com/users/53925acf-5f2a-43ef-a66e-137c2e386dad/generated/9XIuqh45T5Qsj8Ow/image.jpg',
      stars: 5,
      text: "EduChat's 24/7 support is a lifesaver during exams!",
      name: 'Lucas Müller',
      role: 'Student',
    },
  ];
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  // Auto-advance every 4.5s
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearTimeout(timeoutRef.current);
  }, [index, testimonials.length]);

  function handlePrev() {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }
  function handleNext() {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }

  function renderStars(stars) {
    const full = Math.floor(stars);
    const half = stars % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <span className="tc-stars">
        {Array(full).fill().map((_, i) => <span key={'f'+i} className="tc-star tc-star-filled">★</span>)}
        {half && <span className="tc-star tc-star-half">☆</span>}
        {Array(empty).fill().map((_, i) => <span key={'e'+i} className="tc-star tc-star-empty">★</span>)}
      </span>
    );
  }

  const t = testimonials[index];

  return (
    <div className="tc-carousel-outer">
      <button className="tc-arrow tc-arrow-left" onClick={handlePrev} aria-label="Previous">&#8592;</button>
      <div className="tc-card">
        <img className="tc-img" src={t.image} alt={t.name} />
        <div className="tc-content">
          {renderStars(t.stars)}
          <div className="tc-text">{t.text}</div>
          <div className="tc-name">{t.name}</div>
          <div className="tc-role">{t.role}</div>
        </div>
      </div>
      <button className="tc-arrow tc-arrow-right" onClick={handleNext} aria-label="Next">&#8594;</button>
    </div>
  );
}

export default App;
