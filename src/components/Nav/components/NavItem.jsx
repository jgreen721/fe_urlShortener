import React from 'react'

const NavItem = ({children}) => {
  return (
    <li className="nav-item">
    <a className="nav-link" href="">{children}</a>
</li>
  )
}

export default NavItem