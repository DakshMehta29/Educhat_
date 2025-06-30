import React from 'react';
import './MyBookings.css';

export default function MyBookings({
  bookings,
  onCancel,
  mentors // Pass mentors to display mentor names
}) {
  return (
    <div className="my-bookings">
      <h3>My Bookings</h3>
      <div className="booking-list">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => {
             const mentor = mentors.find(m => m.id === booking.mentorId);
            return (
              <div key={index} className={`booking-item ${booking.status.toLowerCase()}`}>
                 <p>Mentor: {booking.mentorName || mentor?.name}</p>
                 <p>Date: {booking.date}, Time: {booking.time} ({booking.duration} mins)</p>
                 <p>Status: <span className={`booking-status ${booking.status.toLowerCase()}`}>{booking.status}</span></p>
                 {booking.status === 'Upcoming' && (
                   <div className="booking-actions">
                     <button className="cancel-btn" onClick={() => onCancel(booking.id)}>Cancel</button>
                     {/* Placeholder for Join Meeting Button */}
                     <button className="join-meeting-btn" onClick={() => alert(`Joining meeting for session with ${booking.mentorName || mentor?.name} at ${booking.time} on ${booking.date}`)}>Join Meeting (Mock)</button>
                   </div>
                 )}
               </div>
            );
          })
        ) : (
          <p>You have no upcoming or past bookings.</p>
        )}
      </div>
    </div>
  );
} 