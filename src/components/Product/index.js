import React from 'react'
import './style.css'

function Product({ title, imgUrl }) {
    return (
        <div className={'productContainer'}>
            <div className={'productImageContainer'}>
                <img width={"150px"} src={imgUrl}></img>
            </div>
            <div className={'additionalInfoContainer'}>
                <h3>{title}</h3>
                <p>Agregar a Carrito</p>
            </div>
        </div>
    )
}

export default Product
