import React from 'react'
import { User } from 'phosphor-react'
import { Link } from 'gatsby'

import './signin-link.scss'

const SignInLink = () => {
  return (
    <span data-store-signin-link>
      <Link to="/" className="title-sub-subsection">
        <User size={32} />
        <span>Sign In</span>
      </Link>
    </span>
  )
}

export default SignInLink
