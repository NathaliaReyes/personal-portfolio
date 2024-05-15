import React from 'react';
import '../App.css';

function Footer() {
  return (
    // <>
      <footer className="bg-dark profile-footer">
        <h3 className="mt-3 text-white fs-6"> &copy; 2024 Personal Portfolio. All rights Reserved</h3>
        <a className="mt-3 h4 text-light d-inline-block mr-4-important" href="https://github.com/NathaliaReyes/personal-portfolio.git" target="_blank">
          <i className="fab fa-github mb-4"></i>
        </a>
        <a className="mt-3 h4 text-light d-inline-block mr-4-important" href="https://www.linkedin.com/in/silvia-reyes-2b907123b/" target="_blank">
          <i className="fab fa-linkedin mb-4"></i>
        </a>
        <a className="mt-3 h4 text-light d-inline-block mr-4-important" href="https://x.com/nathali14996234?s=11" target="_blank">
          <i className="fab fa-twitter mb-4"></i>
        </a>
      </footer>
    // </>
  )
}

export default Footer;