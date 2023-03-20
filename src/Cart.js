
import CartItems from "./CartItems";

const Cart=(props)=>{
  
   
       const {products} = props;
        return(
         <div className="cart-wrapper">
           {products.map((product)=>{
            return(<CartItems
                product={product}
                key={product.id}
                qntOnChangeIncrease={props.qntOnChangeIncrease}
                qntOnChangeDecrease={props.qntOnChangeDecrease}
                deleteItems={props.deleteItems}
                
                 />)
           })}
           
            
         </div>
        )
    
}
export default Cart