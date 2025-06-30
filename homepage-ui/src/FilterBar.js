import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './FilterBar.css';

export default function FilterBar({
  standards,
  subjects,
  selectedStandard,
  setSelectedStandard,
  selectedSubject,
  setSelectedSubject,
  onShowMaterials
}) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="filter-bar">
      <Dropdown
        label="Standard"
        value={selectedStandard}
        onChange={setSelectedStandard}
        options={standards}
      />
      <Dropdown
        label="Subject"
        value={selectedSubject}
        onChange={setSelectedSubject}
        options={subjects}
      />
      {/* Optional Search Bar */}
      <input
        type="text"
        placeholder="Search by chapter or keyword..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={onShowMaterials} className="show-materials-btn">
        Show Materials
      </button>
    </div>
  );
} 