import React from 'react'
import useToogle from '../hooks/useToogle'

function Navbar() {

  const [isLogged, setIsLogged] = useToogle();

  return (
    <div>
      <button onClick={setIsLogged}>{isLogged ? "Logout" : "Login"}</button>
    </div>
  )
}

export default Navbar;