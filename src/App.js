import React from 'react';

import Navigation from './Components/Navigation/Navigation';
import SaladMaker from './Components/SaladMaker/SaladMaker';
import userContext from './Components/user/User';


const user = {
  "name": "Mllenium",
  "favorites": [
    "avocado",
    "carrot"
  ]
}

const App = () => {
  return (
    <userContext.Provider value={user}>
    <Navigation/>
    <SaladMaker/>
    </userContext.Provider>
  )
}

export default App
