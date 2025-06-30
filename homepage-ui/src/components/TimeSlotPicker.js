import React from 'react';
import './TimeSlotPicker.css';

export default function TimeSlotPicker({
  slots,
  onBook,
  mentors // Pass mentors to get mentor names
}) {
  return (
    <div className="time-slot-picker">
      <h3>Available Time Slots</h3>
      <div className="time-slot-list">
        {slots.length > 0 ? (
          slots.map(slot => {
            const mentor = mentors.find(m => m.id === slot.mentorId);
            return (
              <div key={slot.id} className="time-slot-card">
                 <div className="slot-details">
                     <span className="slot-time">{slot.time} ({slot.duration} mins)</span>
                     <span className="slot-mentor">with {mentor?.name}</span>
                 </div>
                 <button className="book-now-btn" onClick={() => onBook(slot.id)}>
                   Book Now
                 </button>
               </div>
            );
          })
        ) : (
          <p>No available slots found for the selected criteria.</p>
        )}
      </div>
    </div>
  );
} 