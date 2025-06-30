import React from 'react';
import './Dropdown.css';

export default function Dropdown({ label, value, onChange, options }) {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label">{label}</label>
      <select
        className="dropdown-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
} 