import React from 'react'

import '../styles/products.css'

const Products = ({ products, onDeleteProduct }) => {

    const newProducts = products.map((product) => {
        return(
            <div className="product" key={product.id}>
                <h1>{product.name}</h1>
                <h3>{product.description}</h3>
                <h3>Price: ${product.price}</h3>
                <h3>Quantity: {product.qty}</h3>
                <button 
                    className="delete-button"
                    onClick={async (e) => {
                        e.preventDefault()
                        console.log('product: ', product)
                        let productId = product.id
                        console.log('productId: ', productId)
                        const response = await fetch(`http://localhost:5000/product/${productId}`, {
                            method: "DELETE",
                            headers:{
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(product)
                        });
    
                        if (response) {
                            console.log('response worked')
                            console.log('product: ', product)
                            onDeleteProduct(product)
                        }
    
                    }}
                >Delete Me</button>
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
