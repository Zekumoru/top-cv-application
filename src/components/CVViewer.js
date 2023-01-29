import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import '../styles/CV.scss';
import CV from './CV';

const MM_PER_16PX = 127 / 30;

function CVViewer({ data }) {
  const cvViewer = useRef(null);
  const cvRef = useRef(null);

  useEffect(() => {
    const updateRemSize = () => {
      const { width } = cvRef.current.getBoundingClientRect();
      const pixelPerMM = width / 210;
      const currentRemSize = MM_PER_16PX * pixelPerMM;

      cvViewer.current.style.fontSize = `${currentRemSize}px`;
    };

    updateRemSize();
    window.addEventListener('resize', updateRemSize);

    return () => {
      window.removeEventListener('resize', updateRemSize);
    };
  }, []);

  return (
    <div className="CVViewer" ref={cvViewer}>
      <CV data={data} ref={cvRef} />
    </div>
  );
}

export default CVViewer;
