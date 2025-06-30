import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FilterBar from './FilterBar'; // We will create this next
import StudyMaterialCard from './StudyMaterialCard'; // We will create this soon
import './StudyGuidesPage.css';

const standards = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
const subjects = ['Maths', 'Science', 'English', 'Social Science', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Economics', 'Computer Science']; // Extended subject list

// Dummy data for study materials (replace with actual data fetching later)
const dummyMaterials = [
  { id: 1, standard: '6', subject: 'Maths', title: 'Std 6 - Chapter 1 Notes', type: 'Notes', verified: true, fileSize: '1.2 MB', lastUpdated: '2023-10-27', downloadLink: '#' },
  { id: 2, standard: '6', subject: 'Maths', title: 'Std 6 - Chapter 1 Worksheet', type: 'Worksheet', verified: true, fileSize: '0.8 MB', lastUpdated: '2023-10-26', downloadLink: '#' },
  { id: 3, standard: '7', subject: 'Science', title: 'Std 7 - Chapter 5 Textbook', type: 'Textbook', verified: false, fileSize: '5.5 MB', lastUpdated: '2023-10-25', downloadLink: '#' },
  { id: 4, standard: '6', subject: 'Maths', title: 'Std 6 - Chapter 2 Notes', type: 'Notes', verified: true, fileSize: '1.1 MB', lastUpdated: '2023-10-27', downloadLink: '#' },
  { id: 5, standard: '8', subject: 'English', title: 'Std 8 - Poem Analysis', type: 'Notes', verified: true, fileSize: '0.9 MB', lastUpdated: '2023-10-24', downloadLink: '#' },
  { id: 6, standard: '6', subject: 'Maths', title: 'Std 6 - Chapter 1 Answer Key', type: 'Answer Key', verified: true, fileSize: '0.5 MB', lastUpdated: '2023-10-27', downloadLink: '#' },
];

export default function StudyGuidesPage() {
  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [filteredMaterials, setFilteredMaterials] = useState([]);

  const handleShowMaterials = () => {
    const filtered = dummyMaterials.filter(material =>
      (selectedStandard === '' || material.standard === selectedStandard) &&
      (selectedSubject === '' || material.subject === selectedSubject)
    );
    setFilteredMaterials(filtered);
  };

  // Show all materials initially or when filters are cleared
  useEffect(() => {
    if (selectedStandard === '' && selectedSubject === '') {
      setFilteredMaterials(dummyMaterials);
    } else {
      handleShowMaterials(); // Apply filter if any is selected on mount
    }
  }, [selectedStandard, selectedSubject]); // Re-filter when dropdowns change


  return (
    <div className="study-guides-page">
      <Navbar />
      <div className="study-guides-content">
        <h1>Study Guides & Materials</h1>
        <FilterBar
          standards={standards}
          subjects={subjects}
          selectedStandard={selectedStandard}
          setSelectedStandard={setSelectedStandard}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          onShowMaterials={handleShowMaterials}
        />
        <div className="materials-display">
          {filteredMaterials.map(material => (
            <StudyMaterialCard key={material.id} material={material} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
} 