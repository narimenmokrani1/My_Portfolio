import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutMe/AboutMe';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';

function App() {
  return (

    <div className="App">
      <header>
        <Header/>
      </header>
      <Routes>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
