import { not } from 'utilities/helper'
import React from 'react'
 

interface SidebarProps {
    children : React.ReactNode,
    open : boolean, 
}

const Sidebar : React.FC<SidebarProps> = ({open,children}) => {
 
  return (
    <nav className={`sidebar ${not(open) && 'close'}`}>
      {children}
    </nav>
  )
}
 
export default Sidebar
