import logo from './logo.svg';


import { 
  Route, 
  BrowserRouter, 
  Navigate,
  Routes
} from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import NavbarComp from './components/NavbarComp';


// Pages
import Home from './components/Home'
import About from './components/About'
import Donate from './components/Donate'
import Projects from './components/Projects'

import NotFoundPage from './components/NotFoundPage';

import './App.css';

var watermark = "© EinKara, 2023";

if (process.env.NODE_ENV !== 'production') {
  watermark = "© EinKara, 2023 --DEV--"
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '75px',
  width: '100%',
}

const styles = {
  container: {
      paddingLeft: 0,
      paddingRight: 0
  },
  row: {
      marginLeft: 0,
      marginRight: 0
  },
  col: {
      paddingLeft: 0,
      paddingRight: 0
  }
};

function App() {
  return (
    <Container fluid className='App' style={styles.container}>
      <BrowserRouter>
      <Row style={styles.row} >
          <header>
            <NavbarComp />
          </header>
        <div className='body'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

          <div style={phantom} />
          <footer>
              <p>
                <a className="fa fa-twitter" href="https://www.twitter.com/notokay3272" />
                &nbsp;<a className="fa fa-github" href="https://www.github.com/EinKara" />
                &nbsp;<a className="fa fa-youtube" href="#" />
                <br />
                {watermark}
              </p>
          </footer>
        </Row>
      </BrowserRouter>
    </Container>
  );
}

export default App;
