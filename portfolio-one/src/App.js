
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience"
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import ProjectDisplay from "./pages/ProjectDisplay";


function App() {
<<<<<<< HEAD
  return ( 
  <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
      </Routes>
=======
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
      </Router>
>>>>>>> d9050400401070e7f181e16138e3d14c1a897996
      <Footer />
    </div>
  );
}

export default App;

