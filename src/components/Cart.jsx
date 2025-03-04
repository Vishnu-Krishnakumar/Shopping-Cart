import { useContext, useEffect, useState } from "react"
import { CartContext } from "./context/CartContext";
import propTypes from "prop-types";

export function Cart (props) {
    const cart = useContext(CartContext);
  
  
    return (
        <>
        {cart.length}
        <svg 
        fill="#000000" 
        height="32px" width="32px" 
        version="1.1" id="Capa_1" 
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 335.302 335.302" xmlSpace="preserve">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g> <path d="M319.555,0h-42.422c-12.278,0-23.913,8.69-27.063,20.558L233.956,81H14.814c-4.089,0-7.811,1.67-10.479,4.614 c-2.668,2.944-3.916,6.831-3.515,10.901l11.405,115.809C13.011,220.298,20.17,227,28.182,227h183.423 c7.753,0,15.413-6.066,17.438-13.551l21.406-79.26c0.593-1.066,1.068-2.061,1.395-3.295L278.672,30h40.884c8.284,0,15-6.716,15-15 S327.84,0,319.555,0z"></path> 
            <path d="M221.17,257h-202c-8.284,0-15,6.716-15,15s6.716,15,15,15h8.781c-2.128,4.416-3.321,9.364-3.321,14.585 c0,18.591,15.125,33.717,33.718,33.717c18.591,0,33.717-15.125,33.717-33.717c0-5.221-1.193-10.169-3.321-14.585h66.737 c-2.128,4.416-3.321,9.364-3.321,14.585c0,18.591,15.125,33.717,33.717,33.717s33.718-15.125,33.718-33.717 c0-5.221-1.193-10.169-3.321-14.585h4.898c8.284,0,15-6.716,15-15S229.454,257,221.17,257z"></path> 
            </g> </g>
        </svg>
        </>
    )
}