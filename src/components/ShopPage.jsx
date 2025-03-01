import { useState, useEffect, useContext } from 'react';
import { Items } from '/home/vishnu/odin/reactProjects/shoppingCart/src/components/Items.jsx';
import {createProducts} from '/home/vishnu/odin/reactProjects/shoppingCart/src/products.js'
import { Navbar } from './Navbar';
import { CartContext } from './context/CartContext';
export function ShopPage(){
  const shoppingCart = useContext(CartContext);
  const [data , setData] = useState([]);
  const [cart,setCart] = useState(shoppingCart.length)
  useEffect(()=>{

  },[cart]);

  useEffect(()=>{
    createProducts().then(productData =>{
      setData([...data,...productData.slice(0,6)])
      console.log(productData);
    })
  },[]) 

  return (
    <>
      <Navbar cart = {cart}/>
      <div className = "list">          
         {data.map((products)=>{
          return <Items item = {products.title} link = {products.image} id = {products.id} price = {products.price} length = {setCart} />
         })
         } 
      </div>
    </>
  )
}