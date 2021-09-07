import React, { useState, useEffect, useRef } from 'react'
import { COLORS } from '../Constants/constants';
import Product from '../Product'
import './style.css'
function Products({ products }) {

    //Reason we add fake items:
    //https://stackoverflow.com/questions/32802202/how-to-center-a-flex-container-but-left-align-flex-items
    //https://stackoverflow.com/questions/34928565/properly-sizing-and-aligning-the-flex-items-on-the-last-row
    const originalProductsCount = useRef(products.length);
    const previousWindowSize = useRef(window.innerWidth);
    const [displayItems, setDisplayItems] = useState([]);

    const displayProducts = () => {
        if (window.innerWidth >= 1260) {
            addDummyProducts(4);
        }
        else if (window.innerWidth >= 960) {
            addDummyProducts(3);
        }
        else if (window.innerWidth >= 670) {
            addDummyProducts(2);
        }
        return products.map(({ title, url }) => {
            return (
                <Product imgUrl={url} title={title} />
            )

        })
    }
    const addDummyProducts = (lineQty) => {
        if (originalProductsCount.current % lineQty !== 0)
            for (let i = 0; i < lineQty - originalProductsCount.current % lineQty; i++) {
                products.push({ title: i, url: null })
            }
    }
    const resetDummyProducts = (lineQty) => {
        previousWindowSize.current = window.innerWidth;
        if (lineQty !== 1)
            products = products.slice(0, products.length - (lineQty - (originalProductsCount.current % lineQty)));
        setDisplayItems(displayProducts());
    }

    useEffect(() => {
        const unsubscribe = window.addEventListener('resize', (evt) => {
            const currentSize = window.innerWidth;
            if (previousWindowSize.current >= 1260 && currentSize < 1260) {
                resetDummyProducts(4);
            }
            else if ((previousWindowSize.current >= 960 && previousWindowSize.current < 1260) && (currentSize >= 1260 || currentSize < 960)) {
                resetDummyProducts(3);
            }
            else if ((previousWindowSize.current >= 670 && previousWindowSize.current < 960) && currentSize >= 960) {
                resetDummyProducts(2);
            }
            else if (previousWindowSize.current < 670 && currentSize >= 670) {
                resetDummyProducts(1);
            }
        });

        setDisplayItems(displayProducts());

        return () => {
            // unsubscribe();
        }
    }, []);

    return (
        <div id={'displayOfProducts'} className='content'>
            {displayItems}
        </div>
    )
}

export default Products
