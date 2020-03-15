import React, {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/product').then
      (response => response.json().then(data => {
        console.log('data: ', data)
    }))
  }, [])

  return (
    <div className="App">
      <p>hey friends</p>
    </div>
  );
}

export default App;
