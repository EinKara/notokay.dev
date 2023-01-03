import logo from './logo.svg';
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComp />
      </header>
    </div>
  );
}

export default App;
