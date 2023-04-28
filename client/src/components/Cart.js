import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './UserContext';



function Cart(){

    const { user } = useContext(UserContext);
    const [ cart, setCart ] = useState("");


    useEffect(() => {
        if (user){
            fetch('/cart')
                .then((r) => r.json())
                .then((data) => setCart(data))
                .catch((error) => console.log(error));
        }
    },[user]);


    if (!user) {
        return <p>You must be logged in to view your cart.</p>;}

    function deleteFromCart(cartProductId){
        fetch('/cart', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",},
                
        })
    }



    return (
    <div>
        <h1>Your Cart</h1>
         {cart?.cart_products?.map((cartProduct) => (
            <div key={cartProduct.id}>
                <img style={{width:"200px"}} src={cartProduct.product.image_url} alt={cartProduct.product.name} />
                <h2>{cartProduct.product.name}</h2>
                <p>Quantity: {cartProduct.quantity}</p>
                <button>Delete</button>
            </div>
            ))}
    </div>
  );
}

export default Cart;