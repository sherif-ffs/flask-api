import React from 'react'

import '../styles/form.css'
class Form extends React.Component {
    render() {
        return(
            <form className="form">
                <h1 className="form-title">Add Product Form</h1>
                <input placeholder="name of product"></input>
                <input placeholder="price of product"></input>
                <input placeholder="quantity of product"></input>
                <button>submit</button>
            </form>
        )
    }
}

export default Form