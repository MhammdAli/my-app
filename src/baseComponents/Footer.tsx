import React from 'react'

interface FooterPops {
   children ?: React.ReactNode
}

const Footer : React.FC<FooterPops> = ({children}) => {
  return (
    <div className='bottom-content'>
        {children}
    </div>
  )
}

export default Footer
