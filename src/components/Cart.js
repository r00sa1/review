import axios from "axios";
import { useEffect, useState } from "react";
import { shoppingCart } from "./signals/CartSignal";


/**
 * Simple example component for fetching and printing the products and
 * adding selected to the cart.
 */
export default function CartExample(){
    return(
        <div>
            <ProductList/>   
            <CartProductList/>    
        </div>
    )
}

function ProductList(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('/products')
            .then((resp)=>{
                setProducts(resp.data);
            })
            .catch (error => {
                console.log(error.message);
            })
    },[]);

    //Adds/updates product into the cart
    function updateProductCart(product){
        const prod = shoppingCart.value.find( p => p.id === product.id );
        if( prod ){
            prod.count++;
            shoppingCart.value = [...shoppingCart.value];
        }else{
            shoppingCart.value = [...shoppingCart.value, {...product, count: 1}];
        }
    }

    return(
        <div>
            <h2>All the products</h2>
            <ul>
                { products.map(product => 
                    <li key={product.id}>
                        <button onClick={ () => updateProductCart(product) }>{product.productName}</button>
                    </li>) 
                }
            </ul>
        </div>
    );
}

function CartProductList(){
    return(
        <div>
            <h2>Products in the cart</h2>
            <button onClick={()=> shoppingCart.value = []}>Empty cart</button>
            <ul>
                { shoppingCart.value.map(product => <li key={product.id}><b>{product.count+"x "}</b>{product.productName}</li>) }
            </ul>
        </div>
    );
}