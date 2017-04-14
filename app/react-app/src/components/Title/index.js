import React, { Component, PropTypes } from 'react'
import Cart from '../Cart'
import './styles.css'

const Title = ({ products, total, totalProducts }) => (
    <div className="titleContainer">
        <div className='productTitle'>
            Products
        </div>
        <Cart
            products={products}
            total={total}
            totalProducts={totalProducts}   
        />
    </div>
)

export default Title