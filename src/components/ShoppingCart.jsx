import { Navbar } from "./Navbar";
import { useContext ,useState } from 'react';
import { CartContext } from "./context/CartContext";
import { Items } from "./Items";
export function ShoppingCart(props){
  const shoppingCart = useContext(CartContext);
  const [cart,setCart] = useState(shoppingCart.length)
  return(
    <>
      <Navbar/>
      <div>
        <div className = "shopPage">          
          {shoppingCart.map((products)=>{
            return(
              <div>
                <div>{products.amount} {products.name} {products.price * products.amount}</div>
              </div>
            )})} 
        </div>
      </div>
    </>
    )
}