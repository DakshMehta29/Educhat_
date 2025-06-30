import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div className="contact-bg">
      <div className="contact-container">
        <div className="contact-info-col">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-desc">Have a question, suggestion, or just want to say hello?<br/>We'd love to hear from you!</p>
          <div className="contact-info-list">
            <div className="contact-info-item"><span className="contact-icon">📧</span> <span>support@educhat.ai</span></div>
            <div className="contact-info-item"><span className="contact-icon">📞</span> <span>+91-98765-43210</span></div>
            <div className="contact-info-item"><span className="contact-icon">📍</span> <span>EduChat HQ, Gandhinagar, Gujarat, India</span></div>
          </div>
          <div className="contact-hours">
            <span className="contact-icon">⏰</span> <span>Mon–Sat, 10:00 AM – 6:00 PM</span>
          </div>
          <div className="contact-connect">Let's connect and make learning better, together!</div>
        </div>
        <div className="contact-form-col">
          <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="contact-form-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
            <div className="contact-form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
            <div className="contact-form-row">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
            <div className="contact-form-row">
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                className="contact-input contact-textarea"
                rows={4}
              />
            </div>
            <button type="submit" className="contact-submit-btn">Send Message</button>
            {submitted && <div className="contact-success">Thank you! We'll get back to you soon.</div>}
          </form>
          <div className="contact-map-embed">
            <iframe
              title="EduChat HQ Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.6266%2C23.2156%2C72.6366%2C23.2256&amp;layer=mapnik"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 