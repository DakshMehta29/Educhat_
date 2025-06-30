import React, { useState } from 'react';
import './BookingModal.css';

export default function BookingModal({
  isOpen,
  onClose,
  slot,
  mentor,
  onConfirmBooking
}) {
  if (!isOpen || !slot || !mentor) return null;

  const handleConfirm = () => {
    onConfirmBooking(slot.id);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Confirm Your Booking</h2>
        <p>You are about to book a session:</p>
        <div className="booking-details">
          <p><strong>Mentor:</strong> {mentor.name}</p>
          <p><strong>Subject(s):</strong> {mentor.subjects.join(', ')}</p>
          <p><strong>Date:</strong> {slot.date}</p>
          <p><strong>Time:</strong> {slot.time} ({slot.duration} mins)</p>
        </div>

        {/* Optional: Add student details form here */}

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="confirm-btn" onClick={handleConfirm}>Confirm Booking</button>
        </div>
      </div>
    </div>
  );
} 