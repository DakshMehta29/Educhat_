import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MentorCard from './components/MentorCard';
import TimeSlotPicker from './components/TimeSlotPicker';
import MyBookings from './components/MyBookings';
import BookingModal from './components/BookingModal';
import './OneOnOneSessionsPage.css';

// Import placeholder components (will create these next)
// import BenefitsSection from './BenefitsSection';

const subjects = ['Maths', 'Science', 'English', 'Social Science', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Economics', 'Computer Science'];

// Dummy data for mentors (replace with actual data later)
const dummyMentors = [
  { id: 1, name: 'Ms. Priya Sharma', image: 'https://i.pravatar.cc/150?img=1', subjects: ['Maths', 'Physics'], rating: 4.8, availability: 'Mon-Fri' },
  { id: 2, name: 'Mr. Anand Singh', image: 'https://i.pravatar.cc/150?img=2', subjects: ['Science', 'Biology'], rating: 4.5, availability: 'Tue-Sat' },
  { id: 3, name: 'Ms. Emily Carter', image: 'https://i.pravatar.cc/150?img=3', subjects: ['English', 'Social Science'], rating: 4.9, availability: 'Mon-Sat' },
];

// Dummy data for time slots (replace with actual data later)
const dummyTimeSlots = [
  { id: 1, mentorId: 1, date: '2023-11-10', time: '10:00', duration: 30, booked: false },
  { id: 2, mentorId: 1, date: '2023-11-10', time: '10:30', duration: 30, booked: true },
  { id: 3, mentorId: 2, date: '2023-11-10', time: '11:00', duration: 60, booked: false },
  { id: 4, mentorId: 3, date: '2023-11-11', time: '14:00', duration: 30, booked: false },
];

export default function OneOnOneSessionsPage() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [myBookings, setMyBookings] = useState([]); // Dummy state for user bookings
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Simulate fetching available slots based on filters
  useEffect(() => {
    // In a real app, this would fetch data from an API
    const filteredSlots = dummyTimeSlots.filter(slot => {
      const mentor = dummyMentors.find(m => m.id === slot.mentorId);
      const subjectMatch = selectedSubject === '' || (mentor && mentor.subjects.includes(selectedSubject));
      const dateMatch = selectedDate === '' || slot.date === selectedDate;
      return subjectMatch && dateMatch && !slot.booked;
    });
    setAvailableSlots(filteredSlots);
  }, [selectedSubject, selectedDate]); // Re-filter when filters change

  const handleBookSessionClick = (slotId) => {
      const slotToBook = availableSlots.find(slot => slot.id === slotId);
      if(slotToBook) {
          setSelectedSlot(slotToBook);
          setIsModalOpen(true);
      }
  };

  const handleConfirmBooking = (slotId) => {
    // Find the slot in the main dummy data and mark as booked
    const bookedSlotIndex = dummyTimeSlots.findIndex(slot => slot.id === slotId);
    if (bookedSlotIndex !== -1 && !dummyTimeSlots[bookedSlotIndex].booked) {
      dummyTimeSlots[bookedSlotIndex].booked = true; // Mark as booked in dummy data source

      const bookedSlot = dummyTimeSlots[bookedSlotIndex];
      const mentor = dummyMentors.find(m => m.id === bookedSlot.mentorId);

      // Add to myBookings state
      setMyBookings(prevBookings => [
        ...prevBookings,
        { ...bookedSlot, mentorName: mentor?.name, status: 'Upcoming' }
      ]);

      // Remove from availableSlots state
      setAvailableSlots(prevSlots => prevSlots.filter(slot => slot.id !== slotId));

      alert(`Session with ${mentor?.name} at ${bookedSlot.time} on ${bookedSlot.date} confirmed!`);
    }
  };

  const handleCancelBooking = (bookingId) => {
      // Placeholder cancel logic
      alert(`Cancelling booking with ID: ${bookingId}`);
      // In a real app, this would involve confirmation, updating state/backend, etc.
      setMyBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
      // Simulate making the slot available again (optional, depending on cancellation policy)
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedSlot(null);
  };

  const selectedMentorForModal = selectedSlot ? dummyMentors.find(m => m.id === selectedSlot.mentorId) : null;

  return (
    <div className="one-on-one-sessions-page">
      <Navbar />
      <div className="one-on-one-sessions-content">
        <h1>Book a One-on-One Session</h1>

        {/* Benefits Section Placeholder */}
        {/* <BenefitsSection /> */}
        <div className="benefits-section">
            <h2>Why book a 1-on-1 session?</h2>
            <ul>
                <li>Personalized academic help tailored to your needs.</li>
                <li>Ask questions freely without hesitation in a private setting.</li>
                <li>Learn at your own pace with dedicated mentor attention.</li>
                <li>Get live guidance on challenging concepts or career paths.</li>
            </ul>
        </div>

        {/* Filters Section */}
        <div className="filters-section">
            <div className="filter-group">
                <label>Subject:</label>
                 <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                    <option value="">All Subjects</option>
                    {subjects.map(subject => <option key={subject} value={subject}>{subject}</option>)}
                </select>
            </div>
             <div className="filter-group">
                <label>Date:</label>
                 <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            </div>
             {/* Optional Search Bar for Mentors/Topics */}
             {/* <input type="text" placeholder="Search mentors or topics..." /> */}
        </div>

        {/* Mentor Profiles Section */}
        <div className="mentors-section">
            <h2>Available Mentors</h2>
             <div className="mentor-list">
                 {dummyMentors.map(mentor => (
                    <MentorCard key={mentor.id} mentor={mentor} />
                 ))}
             </div>
        </div>

        {/* Available Time Slots Section */}
        <div className="time-slots-section">
           <TimeSlotPicker slots={availableSlots} onBook={handleBookSessionClick} mentors={dummyMentors} />
        </div>

        {/* My Bookings Section */}
        <div className="my-bookings-section">
             <MyBookings bookings={myBookings} onCancel={handleCancelBooking} mentors={dummyMentors} />
        </div>

        {/* Other Optional Sections (Placeholder) */}
        {/* Study Planner, Study Tips, My Notes, Teacher Corner, Related Resources, Recently Viewed/Download History, Share Option, Report Broken Links, Multi-language Support */}

      </div>
      <Footer />

      <BookingModal
          isOpen={isModalOpen}
          onClose={closeModal}
          slot={selectedSlot}
          mentor={selectedMentorForModal}
          onConfirmBooking={handleConfirmBooking}
      />
    </div>
  );
} 