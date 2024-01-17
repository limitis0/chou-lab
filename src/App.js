import { Route, Routes, useLocation } from 'react-router-dom';
import classes from './App.module.scss';
import { useEffect, useState } from 'react';
import About from './pages/about';
import People from './pages/people';
import Research from './pages/research';
import Publications from './pages/publication';
import JoinUs from './pages/joinUs';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Crab from './pages/research/Crab';
import Magpie from './pages/research/Magpie';


function App() {
  const location = useLocation();
  const [selected, setSelected] = useState('/');

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <NavBar selected={`${selected}`} />
      <div className={classes.contentContainer} >
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/people' element={<People />} />
          <Route path='/research' element={<Research />} />
          <Route path='/research/crab' element={<Crab />} />
          <Route path='/research/magpie' element={<Magpie />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/join-us' element={<JoinUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
