import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import Contact from './components/Contact';


function App() {
  return (

    <>
    <Router basename="/demo-project">
      <Navbar/>
    <Routes>
    <Route  exact path="/demo-project" element={<Home/>}></Route>
    <Route  path="/portfolio" element={<Portfolio/>}></Route>
    <Route  path="/certificates" element={<Certificates/>}></Route>
    <Route  path="/contact" element={<Contact/>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App;
