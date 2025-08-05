import React, { createContext, useState } from 'react'

export let myCart=createContext()

export default function CartContext({children}) {

    const [cartdata,setCartdata] = useState([])


  return (
    <myCart.Provider value={{cartdata,setCartdata}}>{children}</myCart.Provider>
  )
}
