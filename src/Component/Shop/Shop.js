import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    // cart state display
    const [cart, setCart] = useState([])

    useEffect(() => {
        // load data from products.json folder from public
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // add item to cart
    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        console.log(newCart)
    }
    return (
        <div className='shop'>

            <div className="products-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }

            </div>
            <div className="shop-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;