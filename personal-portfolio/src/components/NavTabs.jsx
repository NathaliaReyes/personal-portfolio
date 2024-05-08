import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className="navbar-brand" href="#"></a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
          Silvia Reyes

          <span className="navbar-toggler-icon"></span>

      </button>
      
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to="/"
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resume"
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;