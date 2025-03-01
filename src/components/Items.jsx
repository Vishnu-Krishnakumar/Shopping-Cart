import { useEffect, useRef, useState } from "react"
import { PlusSign } from "./PlusSign";
import { MinusSign } from "./MinusSign";
import { createProducts } from "../products";
import { ShoppingCart } from "./ShoppingCart";
import { useContext } from 'react';
import { CartContext } from "./context/CartContext";
export function Items(props){
  const cart = useContext(CartContext);
  const [initial, setInitial] = useState(true); 
  const [count, setCount] = useState(0);
  

  useEffect(()=>{    
     if(count === 0 && !initial ){
      let index = cart.findIndex((item)=> item.id === props.id);
      cart.splice(index,1);
      props.length(cart.length); 
      setInitial(true);
    }
  },[count])
  const eventChange =(e) => {

  }
  const addCounter  = ()=>{
    setInitial(false);
    setCount(count + 1);
    const found = cart.find((item) => item.id === props.id)
    if(found === undefined){
      cart.push({id: props.id, name: props.item, price : props.price, amount : 1 });
      
    }
    else{
      for(let item of cart){
        if(item.id === props.id){
          item.amount = item.amount + 1;
        }
      }
    }
    props.length(cart.length); 
  }

  const minusCounter = () =>{
    setInitial(false);
    if(count === 0) { return }
    setCount (count - 1);
    const found = cart.find((item) => item.id === props.id)
    if(count === 0) {
      const index = cart.findIndex(found.id);
      console.log(index);
      cart.splice(index,1);
      props.length(cart.length); 
      return;
    }
    if(found !== undefined){
      for(let item of cart){
        if(item.id === props.id){
          item.amount = item.amount - 1;
        }
      } 
    }
    props.length(cart.length); 
    console.log(cart.length);  
  }
  
  useEffect(()=>{  
    const found = cart.findIndex((item) => item.id === props.id)
    if(found !== -1){
      setCount(cart[found].amount);
    }
   },[])
  return(
    <>
      <div className = "items"  id = {props.id} name = {props.item}>
        <div class ="itemName">{props.item}</div>
          <img id = "vegImg" src = {props.link}></img>
        <div> 
          <PlusSign click = {addCounter}/>
            <input value = {count}/>
          <MinusSign click = {minusCounter}/>
        </div>
      </div>
    </>
  )
}