import React from 'react'

const Button = ({handlePress,isPrimary,isCopied,children}) => {
  return (
    <button onClick={handlePress} className={isPrimary ? "btn primary cyan" : isCopied ? "btn copied" : "btn form-btn cyan"} >
        {children}
    </button>
  )
}

export default Button