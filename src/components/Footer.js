import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <p className="made-by">
        Made by Zekumoru{' '}
        <a
          href="https://github.com/Zekumoru/top-cv-application"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
      </p>
      <p className="credits">
        CV favicon icon by{' '}
        <a
          href="https://www.flaticon.com/free-icon/resume_3024497"
          target="_blank"
          rel="noreferrer noopener"
        >
          lutfix
        </a>{' '}
        on Flaticon
      </p>
    </footer>
  );
}

export default Footer;
