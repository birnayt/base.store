import React from 'react'
import CartToggle from 'src/components/cart/CartToggle'
import SignInLink from 'src/components/ui/SignInLink'

import Navlinks from '../Navlinks'
import SearchInput from '../SearchInput'

function Navbar() {
  return (
    <header>
      <Navlinks />
      <SearchInput />
      <SignInLink />
      <CartToggle />
    </header>
  )
}

export default Navbar
