import React from 'react'

import '../styles/products.css'

const Products = ({ products }) => {

    const newProducts = products.map(product => {
        return(
            <div className="product">
                <h1>{product.name}</h1>
                <h3>{product.description}</h3>
                <h3>Price: ${product.price}</h3>
                <h3>Quantity: {product.qty}</h3>
                <button className="delete-button">Delete Me</button>
            </div>
        )
    })

    return(
        <div className="wrapper">
            <h1 className="products-title">Products !!!</h1>
            <div className="products-container">
                {newProducts}
            </div>
        </div>
        
    )
}

export default Products
