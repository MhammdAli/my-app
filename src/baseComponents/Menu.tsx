import React from 'react'

interface MenuProps {
   children ?: React.ReactNode
}

const Menu : React.FC<MenuProps> = ({children})=>{
  return (
    <div className="menu-bar">
        <div className="menu">
            {children}
        </div>
    </div>
  )
}

export default Menu
