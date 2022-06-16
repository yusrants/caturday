import logo from './logo.gif';
import './App.css';
import Cat from './Cat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         your lucky day... it's a
        <span className="heading"> Caturday! </span> 
        </p>
        <button> Find out cat breeds </button>

      </header>
    </div>
  );
}

export default App;
