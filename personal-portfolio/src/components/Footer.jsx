import React from 'react';
import '../App.css';

function Footer() {
  return (
    // <>
      <footer className="bg-dark profile-footer">
        <h3 className="mt-3 h5"> &copy; 2024 Personal Portfolio. All rights Reserved</h3>
        <a className="mt-3 h4 text-light" href="https://github.com/NathaliaReyes/personal-portfolio.git" target="_blank">
          <i className="fab fa-github mb-4"></i></a>
      </footer>
    // </>
  )
}

export default Footer;