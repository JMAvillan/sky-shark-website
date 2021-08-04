import React from 'react'
import './style.css'

function Product({ title, imgUrl }) {
    return (
        <div className="completeProductContainer">
            <h3 className={"productTitle"}>{title}</h3>
            <div className={'productContainer'}>
                <div className={'productImageContainer'}>
                    <img width={"85%"} src={imgUrl}></img>
                    <div className={'additionalInfoContainer'}>
                        <p><span>-</span> 2 <span>+</span>Agregar a Carrito</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
