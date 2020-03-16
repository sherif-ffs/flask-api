import React, {useState} from 'react'

import '../styles/form.css'

export const Form = ({onAddNewProduct}) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(1);
    const [quantity, setQuantity] = useState(1);

        return(
            <form className="form">
                <h1 className="form-title">Add Product Form</h1>
                <input 
                    placeholder="name of product"
                    value={name}
                    onChange={e => setName(e.target.value)}
                ></input>
                <input 
                    placeholder="describe this product"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    ></input>
                <input 
                    placeholder="price of product"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                ></input>
                <input 
                    placeholder="quantity of product"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                ></input>
                <button onClick={async (e) => {
                    e.preventDefault()
                    const product = {name, description, price, quantity}
                    const response = await fetch('http://localhost:5000/product', {
                        method: "POST",
                        mode: 'no-cors',
                        headers:{
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(product)
                    });

                    if (response) {
                        console.log('response worked')
                        onAddNewProduct(product)
                    }

                }}>submit</button>
            </form>
        )

}

export default Form