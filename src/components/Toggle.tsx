import React from 'react' 
import { memo } from 'react';


interface ToogleProps extends Pick<React.HTMLAttributes<any>,'onClick'|'className'|'style'> { 
    open ?: boolean
 }
 
 const Toggle : React.FC<ToogleProps> = ({open,...rest}) => {
     
   return (
     <div className='toggle-switch' {...rest} >
         <span className={`switch ${open && 'open'}`}></span>
     </div>
   )
 }
 
 export default memo(Toggle)
 