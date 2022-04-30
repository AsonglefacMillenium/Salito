import React from 'react'
import SaladBuilder from '../SaladBuilder/SaladBuilder'
import SaladSummary from '../SaladSummary/SaladSummary'
import './SaladMaker.css'

const SaladMaker = () => {
  return (
    <div>
        <h1 className="saladmaker">
            <span role='img' aria-label='salad'>🥗</span>
            Prepare your own Salad
            <span role='img' aria-label='salad'>🥗</span>

        </h1>

        <SaladBuilder/>
        <SaladSummary/>
    </div>
  )
}

export default SaladMaker