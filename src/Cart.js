import React from "react";
import CartItems from "./CartItems";

class Cart extends React.Component{
    render(){
        return(
         <div className="cart-wrapper">
            <CartItems/>
            <CartItems/>
            <CartItems/>
            <CartItems/>
         </div>
        )
    }
}
export default Cart