import React, { PropTypes } from 'react'
import CartIcon from './CartIcon'
import './Cart.css'

const Cart = ({ products, total, totalProducts }) => {
  return (
    <div className="checkoutSection">
      <div className="cartRow">
      <div className="checkoutMessage">
        Added to your cart
      </div>
        <div className="cartQuantity">
          <CartIcon />
          <div className="cartDigit">
            {totalProducts}
          </div>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
}

export default Cart
