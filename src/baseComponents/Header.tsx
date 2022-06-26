import React from 'react'

interface HeaderProps {
   children ?: React.ReactNode
}
const Header : React.FC<HeaderProps> = ({children}) => {
  
  return (
    <div className='header'>
       {children}
    </div>
  )
}

export default Header
