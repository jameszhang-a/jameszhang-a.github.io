import React from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import './Resume.css';
import PDF from './Zhang_resume_2022.pdf';

export const Resume = () => {
  return (
    <div class='resume'>
      <h2>Resume</h2>
      <br />

      <Document file={PDF}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
