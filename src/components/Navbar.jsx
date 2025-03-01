
import { Link } from "react-router-dom";
import { Cart } from "./Cart";
export function  Navbar (props){
  
  return(
    <>
      <ul className = "navigation">
        <li id = "home" >
          <Link to ="/">Home</Link>
        </li>
        <li id = "shop">
          <Link to ="/ShopPage">Shop</Link>
        </li>
       
        <li id = "shoppingCart">
          <Link to = "/ShoppingCart">
          <Cart cart ={props.cart}/>
          </Link> 
        </li>
      </ul>
    </>
  )
}