import React from 'react'
import Button from '../../Button/Button'

const MobileMenu = ({showMobile}) => {
  return (
    <div className={showMobile ? "mobile-menu-parent" : "mobile-menu-parent hide-mobile-parent"}>
    <div className="mobile-menu">
        <li className="mobile-item">
            <a href="#">Features</a>
        </li>
        <li className="mobile-item">
            <a href="#">Pricing</a>
        </li>
        <li className="mobile-item">
            <a href="#">Resources</a>
        </li>
        <div className="mobile-btns">
            <button className="btn login-btn">Login</button>
            <br/>
            <Button isPrimary={true} isCopied={false} handlePress={()=>{}}>Sign Up</Button>
        </div>
    </div>
    </div>
  )
}

export default MobileMenu