import React from 'react';
import '../App.css';
import { getYear } from '../utils/helpers';

function Footer() {
  return (
    // <>
      <footer className="cormorant-infant-light-italic bg-sky-900 text-sky-50 text-center p-3" style={{ bottom: 0 }}>
        <h3 className="mt-3 text-sm"> &copy; {getYear()} Personal Portfolio. All rights Reserved</h3>
        <div className='flex justify-center space-x-4 mt-1'>
          <a className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-slate-50 transition-all duration-300" href="https://github.com/NathaliaReyes/personal-portfolio.git" target="_blank">
            <i className="fab fa-github text-white hover:text-zinc-800 text-lg"></i>
          </a>
          <a className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-slate-50 transition-all duration-300" href="https://www.linkedin.com/in/silvia-reyes-2b907123b/" target="_blank">
            <i className="fab fa-linkedin text-white hover:text-zinc-800 text-lg"></i>
          </a>
          <a className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-slate-50 transition-all duration-300" href="https://x.com/nathali14996234?s=11" target="_blank">
            <i className="fab fa-twitter text-white hover:text-zinc-800 text-lg"></i>
          </a>
        </div>
      </footer>
    // </>
  )
}

export default Footer;