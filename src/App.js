import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutMe/AboutMe';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Home from './components/Home/Home';

function App() {
  return (

    <div className="App">
      <header>
        <Header/>
      </header>
      <Routes>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
