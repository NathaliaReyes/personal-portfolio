import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../images/logo.png';
import '../stylesheets/NavBar.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  useEffect(() => {
    const navbar = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    const navbarToggler = document.querySelector('.navbar-toggler');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navbar.classList.remove('show');
        navbarToggler.classList.add('collapsed');
        navbarToggler.setAttribute('aria-expanded', false);
      });
    });
  }, []);

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <img className='logo' src={image} />
        <a className="navbar-brand tangerine-bold" href="/MyBlog">Silvia Reyes</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="cormorant-infant-regular nav-item">
              <Link
                to="/"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </Link>
            </li>
            <li className="cormorant-infant-regular nav-item">
              <Link
                to="/Portfolio"
                // Check to see if the currentPage is `Portfolio`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </Link>
            </li>
            <li className="cormorant-infant-regular nav-item">
              <Link
                to="/MyBlog"
                // Check to see if the currentPage is `MyBlog`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/MyBlog' ? 'nav-link active' : 'nav-link'}
              >
                My Blog
              </Link>
            </li>
            <li className="cormorant-infant-regular nav-item">
              <Link
                to="/Resume"
                // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resumé
              </Link>
            </li>
            <li className="cormorant-infant-regular nav-item">
              <Link
                to="/Contact"
                // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavTabs;