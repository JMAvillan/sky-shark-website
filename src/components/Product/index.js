import React from 'react'
import ProductFooter from './ProductFooter'
import './style.css'

function Product({ title, imgUrl }) {
    return (
        <div className="completeProductContainer" id={title && imgUrl ? 'notHiddden' : 'hidden'}>
            <h3 className={"productTitle"}>{title}</h3>
            <div className={'productContainer'}>
                <div className={'productImageContainer'}>
                    <img width={"85%"} src={imgUrl}></img>
                    <div className={'additionalInfoContainer'}>
                        <ProductFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
