import {useState} from 'react';
import axios from 'axios';

import logo from './logo.gif';
import './App.css';
import Cat from './Cat';

function App() {
  const [show, setShow] = useState(false);
  let [cats, setCats] = useState([]);

  const config = {
    headers:{
     'x-api-key': '8707c32c-3451-483b-a8e2-7323c80e044e'
    }
  };

  const url = 'https://api.thecatapi.com/v1/breeds'

  let showCats = () => {
    setShow(!show);

    axios.get(url, config).then(res=>
      {
        setCats(res.data);
        let catsData = JSON.stringify(cats);
        document.cookie= "cats=" + catsData;
      });
     
  }


  return (
    <div className="App">
      { !show && <>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
         your lucky day... it's a
        <span className="heading"> Caturday! </span> 
        </p> 
        </>
        }
        <button className="main-button" onClick={showCats}> { !show ? "Find out all about cats" : "Hide all cat breeds"} </button>
        {show && <Cat cats={cats}/>}
    </div>
  );
}

export default App;
