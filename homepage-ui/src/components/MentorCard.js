import React from 'react';
import './MentorCard.css';

export default function MentorCard({
  mentor
}) {
  return (
    <div className="mentor-card">
      <img src={mentor.image} alt={mentor.name} className="mentor-image" />
      <h3 className="mentor-name">{mentor.name}</h3>
      <p className="mentor-subjects">Subjects: {mentor.subjects.join(', ')}</p>
      <div className="mentor-rating">
        Rating: {mentor.rating} <span className="star-icon">⭐</span>
      </div>
      <p className="mentor-availability">Availability: {mentor.availability}</p>
      {/* Optional: Add a button to view mentor's full profile or availability */}
    </div>
  );
} 