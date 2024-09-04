import React, { useState, useEffect } from 'react';
import banner from './images/image5.png';

function PatchNote() {
  const [patchNotes, setPatchNotes] = useState({});

  useEffect(() => {
    // JSON 파일에서 데이터를 가져옵니다.
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const notes = data.reduce((acc, note) => {
          if (!acc[note.cardHeader]) {
            acc[note.cardHeader] = [];
          }
          acc[note.cardHeader].push({
            text: note.text,
            date: note.date
          });
          return acc;
        }, {});
        setPatchNotes(notes);
      })
      .catch(error => console.error('Error fetching patch notes:', error));
  }, []);

  return (
    <div className='bg-dark pb-5'>
      <div className='patchnote'>
        <div className='d-flex justify-content-center position-absolute top-50 start-50 translate-middle'>
          <span className='font-11 fs-0 text-white'>패치노트</span>
        </div>
        <img className="patchnote_banner" src={banner} alt="Banner"/>
      </div>

      <div className='container-md'>
        {Object.keys(patchNotes).map((header, index) => (
          <div key={index} className="d-flex justify-content-center pt-5">
            <div className="card">
              <div className="card-header font-11 fw-bold">
                {header}
              </div>
              {patchNotes[header].map((note, idx) => (
                <div key={idx} className="card-body font-11">
                  <blockquote className="blockquote mb-0 fs-6">
                    <p>{note.text}</p>
                    <footer className="blockquote-footer fs-7">{note.date}</footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatchNote;
