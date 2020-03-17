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
  

  const onAddNewProduct = (e, product) => {
    e.persist()
    setProducts(currentProducts => [product,...currentProducts])
    fetch('http://localhost:5000/product').then
        (response => response.json().then(data => {
          console.log('data: ', data)
          setProducts(data)
      }))
  }

  const onDeleteProduct = (product) => {
    setProducts(products.filter(({id}) => id !== product.id))
  }

  return (
    <div className="App">
      <Products products={products} onDeleteProduct={onDeleteProduct}></Products>
      <Form onAddNewProduct={onAddNewProduct}></Form>
    </div>
  );
}

export default App;
