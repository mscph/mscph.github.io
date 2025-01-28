import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/homepage';
import About from './pages/about';
import Programs from './pages/programs';
import GetInvolved from './pages/getinvolved';
import Donate from './pages/donate';
import Contact from './pages/contact';
import NewsandUpdates from './pages/newsandupdates';
import NewsDetails from './pages/newsdetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/newsandupdates" element={<NewsandUpdates />} />
        <Route path="/newsdetails/:id" element={<NewsDetails />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
