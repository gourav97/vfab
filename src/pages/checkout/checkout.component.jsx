import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import CartItem from '../../components/cart-item/cart-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage =({cartItems, total}) => (

    <div className= 'checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key ={CartItem.id} cartItem={cartItem}></CheckoutItem>)
        }
        <div className='total'>
            <span>TOTAL : ${total}</span>
        </div>
        <div className='test-warning'>
            *please use the following test cc for payments*
            <br/>
            4242424242424242 - EXP : any future date, CVV : any three digit
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
});



export default connect(mapStateToProps)(CheckOutPage);