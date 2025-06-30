import React, { useEffect, useRef, useState } from 'react';
import './Section.css';
import { Link } from 'react-router-dom';

// Custom hook to detect if an element is in view
function useInView(options = {}) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

const AnimatedNumber = ({ value, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const step = (timestamp) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [inView, value, duration]);

  return <span className="animated-number" ref={ref}>{count}</span>;
};

const Section = ({ title, description, image, learnMoreLink, dark, reverse, stats, hideLearnMore, chatNowButton }) => {
  // Appear on scroll for title, description, stats, and image
  const [titleRef, titleInView] = useInView({ threshold: 0.2 });
  const [descRef, descInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [imgRef, imgInView] = useInView({ threshold: 0.2 });

  const renderTitle = () => {
    if (typeof title === 'string' && title.includes("AI Study Assistant")) {
      return (
        <h2 ref={titleRef} className={titleInView ? 'fade-in' : 'fade-init'}>
          Your <span className="animated-text">AI Study Assistant</span> is Here!
        </h2>
      );
    }
    return <h2 ref={titleRef} className={titleInView ? 'fade-in' : 'fade-init'}>{title}</h2>;
  };

  return (
    <div className={`section ${dark ? 'dark' : ''}`}>
      <div className={`section-content ${reverse ? 'reverse' : ''}`}>
        <div className="section-text">
          {renderTitle()}
          {typeof description === 'string' ? (
            <p ref={descRef} className={descInView ? 'fade-in' : 'fade-init'}>{description}</p>
          ) : (
            <div ref={descRef} className={descInView ? 'fade-in' : 'fade-init'}>{description}</div>
          )}
          {stats && (
            <div ref={statsRef} className={`stats-grid ${statsInView ? 'fade-in' : 'fade-init'}`}>
              {stats.map((stat, idx) => (
                <div className="stat-item" key={stat.label || idx}>
                  <div className="stat-value">
                    <AnimatedNumber value={stat.value} duration={1200 + idx * 300} />
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-desc">{stat.description}</div>
                </div>
              ))}
            </div>
          )}
          {!hideLearnMore && !chatNowButton && (
            <a href={learnMoreLink} className="learn-more">
            {title.includes("One-on-One") ? "Book Now" : "Learn More"}
          </a>
          
          )}
          {chatNowButton && (
            <Link to="/ai-chat" className="chat-now-btn fade-in">
              Chat Now
            </Link>
          )}
        </div>
        <div className="section-image">
          <img ref={imgRef} className={imgInView ? 'fade-in' : 'fade-init'} src={image} alt={typeof title === 'string' ? title : ''} />
        </div>
      </div>
    </div>
  );
};

export default Section; 