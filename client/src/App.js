import React, {useEffect, useState} from 'react';

import './App.css';
import Products from './components/Products.js'
import Form from './components/Form'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/product').then
      (response => response.json().then(data => {
        console.log('data: ', data)
        setProducts(data)
    }))
  }, [])

  return (
    <div className="App">
      <Products products={products}></Products>
      <Form></Form>
    </div>
  );
}

export default App;
