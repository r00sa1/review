import { effect, signal } from "@preact/signals-react";

export const shoppingCart = signal(getCart());

//Gets shopping cart from the session storage
function getCart(){
    const storageCart = sessionStorage.getItem('cart');
    return JSON.parse(storageCart) || [];
}

//It the cart changes the new values is saved to session storage
effect(()=>{
    sessionStorage.setItem('cart', JSON.stringify(shoppingCart.value));
});