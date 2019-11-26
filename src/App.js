import React, {useState} from 'react';
import './App.css';

function App() {

  const [consoles, setConsoles] = useState(
    [
      {
        name: "PS4",
        price: 199,
        yearOfRelease: 2013
      },
      {
        name: "XBox One X",
        price: 299,
        yearOfRelease: 2015
      },
      {
        name: "Switch",
        price: 150,
        yearOfRelease: 2017
      }
    ]
  )

  return (
    <div className="App">
 
    </div>
  );
}

export default App;
