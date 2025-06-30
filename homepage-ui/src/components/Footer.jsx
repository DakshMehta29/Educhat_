// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-title">Explore</div>
          <Link to="/about">About Us</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="footer-col">
          <div className="footer-title">Support</div>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-col">
          <div className="footer-title">Resources</div>
          <Link to="/study-guides">Study Guides</Link>
          <Link to="/ai-chat">AI Chatbot</Link>
        </div>
        <div className="footer-col newsletter-col">
          <div className="footer-title">Subscribe to our Newsletter</div>
          <div className="footer-desc">Stay up-to-date with the latest EduChat news, updates, and exclusive offers.</div>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="newsletter-input" required />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-social-row">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-icon">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#222" d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social-icon">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#222" d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54-.7-.02-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54c-.65 0-1.29-.04-1.92-.11A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-icon">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#222" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72zm0 0"/></svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-icon">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#222" d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.736 0 8.332.012 7.052.07 5.77.128 4.77.312 4.02.54c-.77.24-1.42.56-2.07 1.21-.65.65-.97 1.3-1.21 2.07-.23.75-.412 1.75-.47 3.03C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.28.47 3.03.24.77.56 1.42 1.21 2.07.65.65 1.3.97 2.07 1.21.75.23 1.75.412 3.03.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.28-.24 3.03-.47.77-.24 1.42-.56 2.07-1.21.65-.65.97-1.3 1.21-2.07.23-.75.412-1.75.47-3.03.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.24-2.28-.47-3.03-.24-.77-.56-1.42-1.21-2.07-.65-.65-1.3-.97-2.07-1.21-.75-.23-1.75-.412-3.03-.47C15.668.012 15.264 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
        </a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} EduChat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
