import './index';
import React from 'react';
import Cart from './Cart'
import NavBar from './NavBar';
import Footer from './Footer';
// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [],
            loading:true,
        }
    }

    componentDidMount() {
        firebase
            .firestore()
            .collection('products')
            .onSnapshot((snapshot) => {
              // console.log(snapshot);
            const products= snapshot.docs.map((doc)=>{
              const data = doc.data();
              data['id']=doc.id
               return data;
             })

             this.setState({
              products:products,
              loading:false
             })
            })
            

    }

    // handle functionality to increase quantity
    handleIncreaseQty = (product) => {
        // console.log("work Increase functionality", product);
        const { products } = this.state;
        const index = products.indexOf(product)
        products[index].Qty += 1;

        this.setState({
            products: products
        })
    }

    // decreasing qnt of products
    handleDecreaseQnt = (product) => {
        // console.log("decreasing quantity is work", product);

        if (product.Qty > 0) {
            const { products } = this.state;
            const index = products.indexOf(product);
            products[index].Qty -= 1;
            this.setState({
                products: products
            })
        }
    }

    // handle delete item from the cart
    handleDeleteItem = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => { return (item.id !== id) }

        )
        this.setState({
            products: items
        })
    }

    // count the cart items 
    getCount() {
        let count = 0;
        const { products } = this.state;
        products.forEach((product) => {
            count += product.Qty;
        })
        return count
    }

    // Get total price of the products
    totelPrice() {
        let totel = 0;
        const { products } = this.state;
        products.forEach((product) => {
            totel += product.Qty * product.price;
        })
        return totel;
    }



    render() {
        const { products,loading } = this.state;
        return (
           <div className = "App" >

            <NavBar count = { this.getCount() }/>
            <Cart products = { products }
            qntOnChangeIncrease = { this.handleIncreaseQty }
            qntOnChangeDecrease = { this.handleDecreaseQnt }
            deleteItems = { this.handleDeleteItem }/>
            {loading && <h2>Loading products...</h2>}
            <Footer totelPrice = { this.totelPrice() }/>
          

            </div>
        );

    }


}

export default App;