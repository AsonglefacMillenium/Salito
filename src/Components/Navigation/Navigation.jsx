import React, {useContext} from 'react'
import userContext from '../user/User'
import './Navigation.css'

const Navigation = () => {

  const user = useContext(userContext)
  return (
    <div className='navigation'>
Welcome, {user.name}
    </div>
  )
}

export default Navigation