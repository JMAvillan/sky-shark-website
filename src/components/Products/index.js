import React from 'react'
import Product from '../Product'
import './style.css'
function Products({ products }) {
    const displayProducts = () => {
        return products.map(({ title, url }) => {
            return (
                <Product imgUrl={url} title={title} />
            )

        })
    }
    return (
        <div id={'displayOfProducts'}>
            {displayProducts()}
        </div>
    )
}

export default Products
