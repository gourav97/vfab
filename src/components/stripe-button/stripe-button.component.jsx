import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey= 'pk_test_51JAIHCSAl4wLVa2miKRli3qlwau6nR5xP9ccV0NdS2uksflOVcs9yjLJHVTAa99cnl2QQOLEEgcyHPg4D3xG1CbN00uCRP08FB';

    const onToken = token => {
        console.log(token);
        alert("Payment Successfull")
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name= 'vfab'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/s/Ysx'
            description={`Your total is $${price}`}
            amount ={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            
        />

    )
};

export default StripeCheckoutButton