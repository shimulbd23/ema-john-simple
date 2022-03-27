import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div>
            <h2>order summary</h2>
            <p>item; {cart.length}</p>

        </div>
    );
};

export default Cart;