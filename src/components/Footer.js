import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        Made by Zekumoru{' '}
        <a
          href="https://github.com/Zekumoru/top-cv-application"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
      </footer>
    );
  }
}

export default Footer;
