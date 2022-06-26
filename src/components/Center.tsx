import React from 'react';

type baseProps = Pick<React.HTMLAttributes<'div'>,'className'|'style'>

interface CenterProps extends baseProps{
    children : React.ReactNode,
    vertical ?: boolean
}

const Center : React.FC<CenterProps> = ({vertical = true,children,className,style}) =>{
    return (
      <div className={`flex justify-center items-center ${vertical && 'flex-col'} min-h-screen ${className}`}>
        {children}
      </div>
    )
}

export default Center;