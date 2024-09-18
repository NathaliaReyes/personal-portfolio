import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../images/logo_png.png';
// import Words from '@components/Words';
import '../stylesheets/NavBar.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  // Manejamos el cierre automático del menú en dispositivos móviles
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        setIsOpen(false);
      });
    });
  }, []);

  return (
    <nav className="bg-sky-900 md:px-1 py-2 shadow-md">
      <div className="flex flex-row items-center justify-between">
        <img className="w-14 md:w-16 h-auto ml-2" src={image} alt="Logo_Silvia_Reyes_Website" />
        <a className="text-base sm:text-lg md:text-xl sm:ml-1 md:ml-2 font-bold text-sky-50" href="/">Full Stack Web Developer</a>
        {/* <Words /> */}
        {/* Botón para pantallas pequeñas */}
        <div className="md:hidden mr-2">
          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-around items-center w-10 h-10 p-2">
            <div className="w-3 h-0.5 bg-sky-50"></div>
            <div className="w-6 h-0.5 bg-sky-50"></div>
            <div className="w-3 h-0.5 bg-sky-50"></div>
          </button>
        </div>

        {/* Menú de navegación para pantallas grandes */}
        <div className="hidden md:flex md:justify-end">
          <ul className="flex md:space-x-2 lg:space-x-6 text-center md:text-right">
            <li className="text-letter">
              <Link
                to="/"
                className={`nav-link ${currentPage === '/' ? 'text-sky-50 font-bold' : 'text-gray-300'}`}
              >
                About Me
              </Link>
            </li>
            <li className="text-letter">
              <Link
                to="/Portfolio"
                className={`nav-link ${currentPage === '/Portfolio' ? 'text-sky-50 font-bold' : 'text-gray-300'}`}
              >
                Portfolio
              </Link>
            </li>
            <li className="text-letter">
              <Link
                to="/MyBlog"
                className={`nav-link ${currentPage === '/MyBlog' ? 'text-sky-50 font-bold' : 'text-gray-300'}`}
              >
                My Blog
              </Link>
            </li>
            <li className="text-letter">
              <Link
                to="/Resume"
                className={`nav-link ${currentPage === '/Resume' ? 'text-sky-50 font-bold' : 'text-gray-300'}`}
              >
                Resumé
              </Link>
            </li>
            <li className="text-letter">
              <Link
                to="/Contact"
                className={`nav-link ${currentPage === '/Contact' ? 'text-sky-50 font-bold' : 'text-gray-300'}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Menú de navegación para pantallas pequeñas cuando el botón está abierto */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} w-full text-right py-2 px-2`}>
        <ul className="flex flex-col space-y-2 text-sky-50 pr-4">
          <li>
            <Link
              to="/"
              className={`nav-link ${currentPage === '/' ? 'font-bold' : 'text-gray-300'}`}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/Portfolio"
              className={`nav-link ${currentPage === '/Portfolio' ? ' font-bold' : 'text-gray-300'}`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/MyBlog"
              className={`nav-link ${currentPage === '/MyBlog' ? ' font-bold' : 'text-gray-300'}`}
            >
              My Blog
            </Link>
          </li>
          <li>
            <Link
              to="/Resume"
              className={`nav-link ${currentPage === '/Resume' ? ' font-bold' : 'text-gray-300'}`}
            >
              Resumé
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className={`nav-link ${currentPage === '/Contact' ? ' font-bold' : 'text-gray-300'}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default NavTabs;