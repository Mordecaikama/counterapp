import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='rowLayout'>
      <img src='./img/cc.png' alt='' />
      <div className='navs'>
        <Link>HOME</Link> /<Link>CONTACT</Link>
      </div>
    </header>
  )
}

export default Header
