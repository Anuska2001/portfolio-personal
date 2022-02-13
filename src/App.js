import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Particles from 'react-tsparticles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import Travel from './components/Travel';


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar/>
          <Header />
          <Project />
          </>
        }/>
        <Route path='/travel' element={
          <>
          <Navbar/>
          <Travel />
        </> 
        }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;