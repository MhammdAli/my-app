import React from 'react' 
import {LinkProps,NavLink} from 'react-router-dom'

interface SidebarProps extends Pick<LinkProps,'to'> , React.HTMLAttributes<any> {
    children ?: React.ReactElement,
    Icon ?: any,
    title ?: string,
    
}  

const Item = React.forwardRef<HTMLDivElement,SidebarProps>(({Icon,title,to,...rest},ref : React.ForwardedRef<HTMLDivElement>)=>{


    return (
        <div ref={ref} {...rest}>
            <li className="nav-link"> 
                <NavLink to={to} > 
                    <i className='icon'>
                        {Icon}
                    </i>
                    <span className="text nav-text">{title}</span>
                </NavLink> 
            </li>
        </div> 
      )

})
 
 

export default Item
