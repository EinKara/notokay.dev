import logo from './logo.svg';
import './App.css';

import { 
  Route, 
  BrowserRouter, 
  Routes
} from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components
import NavbarComp from './components/NavbarComp';


// Pages
import Home from './components/Home'
import About from './components/About'
import Donate from './components/Donate'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <header>
        <NavbarComp />
      </header>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
        </Routes>
      <footer>
        <p>© 2023</p>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
