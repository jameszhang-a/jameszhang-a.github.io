import React from 'react';
import './Resume.css';
import PDF from './Zhang_resume_2022.pdf';

export const Resume = () => {
  return (
    <div class='resume'>
      <h2>Resume</h2>
      <br />

      <iframe src={PDF} />
    </div>
  );
};
