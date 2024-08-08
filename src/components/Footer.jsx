import React from 'react';
import '../App.css';
import { getYear } from '../utils/helpers';

function Footer() {
  return (
    // <>
      <footer className="cormorant-infant-light-italic bg-dark text-white text-center p-3 w-100" style={{ bottom: 0 }}>
        <h3 className="mt-3 fs-6"> &copy; {getYear()} Personal Portfolio. All rights Reserved</h3>
        <a className="mt-1 h4 text-light d-inline-block mr-4-important" href="https://github.com/NathaliaReyes/personal-portfolio.git" target="_blank">
          <i className="fab fa-github fa-xs mb-2 icon-with-shadow"></i>
        </a>
        <a className="mt-1 h4 text-light d-inline-block mr-4-important" href="https://www.linkedin.com/in/silvia-reyes-2b907123b/" target="_blank">
          <i className="fab fa-linkedin fa-xs mb-2 icon-with-shadow"></i>
        </a>
        <a className="mt-1 h4 text-light d-inline-block mr-4-important" href="https://x.com/nathali14996234?s=11" target="_blank">
          <i className="fab fa-twitter fa-xs mb-2 icon-with-shadow"></i>
        </a>
      </footer>
    // </>
  )
}

export default Footer;