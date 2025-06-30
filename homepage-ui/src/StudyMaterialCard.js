import React from 'react';
import './StudyMaterialCard.css';

export default function StudyMaterialCard({ material }) {
  return (
    <div className="study-material-card">
      <div className="card-header">
        <div className="card-title">{material.title}</div>
        <div className="card-type">{material.type}</div>
      </div>
      <div className="card-details">
        {material.verified && <span className="verified-badge">Verified</span>}
        {material.fileSize && <span className="file-size">{material.fileSize}</span>}
        {material.lastUpdated && <span className="last-updated">Last Updated: {material.lastUpdated}</span>}
      </div>
      <a href={material.downloadLink} className="download-btn" download>
        Download
      </a>
      {/* Placeholder for additional features */}
      {/* Concept Videos, Practice Worksheets, Quizzes, etc. will be added here */}
    </div>
  );
} 