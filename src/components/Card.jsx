import React, { useContext } from 'react'
import { myCart } from '../context/CartContext';

export default function Card() {

  useContext(myCart)

  console.log("card component rendered");
  return (
    <div className='bg-success p-3 text-center'>
        <h1>Card</h1>
    </div>
  )
}
