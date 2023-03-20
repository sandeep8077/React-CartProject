import React from "react";
import CartItems from "./CartItems";

class Cart extends React.Component{
    constructor(){
        super()
        this.state={
            products:[
                {
                    title:'I phone 12pro',
                    price:127000,
                    qnt:2,
                    img:"https://m.media-amazon.com/images/I/610pghkO81L._SX679_.jpg" ,
                    id:1
                },
                {
                    title:'laptop',
                    price:80000,
                    qnt:2,
                    img:'https://m.media-amazon.com/images/I/41YamNJ29mL._SX300_SY300_.jpg',
                    id:2
                },
                {
                    title:'Watch',
                    price:1799,
                    qnt:2,
                    img:'https://m.media-amazon.com/images/I/41WCgGbvwhL._SY300_SX300_.jpg',
                    id:3
                },{
                    title:'Bat',
                    price:500,
                    qnt:2,
                    img:'https://m.media-amazon.com/images/I/41nvB58-9aL.jpg',
                    id:4
                }
                

            ]
        }
    }

    // handle functionality to increase quantity
    handleIncreaseQty = (product)=>{
        console.log("work Increase functionality",product);
       const {products} = this.state;
       const index = products.indexOf(product)
       products[index].qnt+=1;
       
       this.setState({
          products:products
        })
    }

    // decreasing qnt of products
    handleDecreaseQnt =(product)=>{
        console.log("decreasing quantity is work",product);
       
       if(product.qnt>0){
        const {products}= this.state;
        const index = products.indexOf(product);
        products[index].qnt-=1;
        this.setState({
            products:products
        })
       }
    }

    // handle delete item from the cart
    handleDeleteItem = (id)=>{
        const {products} = this.state;
        const items = products.filter((item)=>{ return(item.id !== id)}
            
        )
        this.setState({
            products:items
        })
    }
    render(){
       const {products} = this.state;
        return(
         <div className="cart-wrapper">
           {products.map((product)=>{
            return(<CartItems
                product={product}
                key={product.id}
                qntOnChangeIncrease={this.handleIncreaseQty}
                qntOnChangeDecrease={this.handleDecreaseQnt}
                deleteItems={this.handleDeleteItem}
                
                 />)
           })}
           
            
         </div>
        )
    }
}
export default Cart