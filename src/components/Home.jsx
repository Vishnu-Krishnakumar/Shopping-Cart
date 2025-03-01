import { useState } from "react"
import { Navbar } from "./Navbar"
import { createContext } from "react";
export function Home(){
  const [items, setItems] = useState(0);
  const updateItems = (product) =>{
    setItems([...items,product]);
  }
    return (
        <>
          <Navbar />
          <h2>Welcome to this webpage with a totally not half assed front end!</h2>
        </>
    )
}