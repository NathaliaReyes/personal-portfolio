// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <main className="mx-3 main-content" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: '600 !important', fontStyle: 'normal' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

