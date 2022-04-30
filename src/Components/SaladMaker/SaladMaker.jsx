import React, { createContext, useReducer, useRef } from 'react'
import SaladBuilder from '../SaladBuilder/SaladBuilder'
import SaladSummary from '../SaladSummary/SaladSummary'
import './SaladMaker.css'

export const SaladContext = createContext();

const reducer =(state, item) =>{
  return [...state, item]

}


const SaladMaker = () => {
  const [salad, setSalad] = useReducer(reducer, [])
  return (
    <SaladContext.Provider value={{salad, setSalad}}>
        <h1 className="saladmaker">
            <span role='img' aria-label='salad'>🥗</span>
            Prepare your own Salad
            <span role='img' aria-label='salad'>🥗</span>

        </h1>

        <SaladBuilder/>
        <SaladSummary/>
    </SaladContext.Provider>
  )
}

export default SaladMaker