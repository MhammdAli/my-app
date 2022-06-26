import Footer from 'baseComponents/Footer';
import Header from 'baseComponents/Header';
import Item from 'baseComponents/Item';
import Menu from 'baseComponents/Menu';
import Sidebar from 'baseComponents/Sidebar';
import Toggle from 'components/Toggle';
import React, { memo, useState } from 'react'
import { FaChevronRight, FaDailymotion, FaHome, FaMoon, FaSign, FaSun, FaUser } from 'react-icons/fa';
 
import Logo from 'assets/logo.jpg';

const SideBar = () => {
     

    const [check , setCheck] = useState(false);
   
    const [open,setOpen] = useState(false);
    
    return (
        <Sidebar open={open}>
          <Header> 
              <div className="image-text">
                  <span className="image ">
                      <img src={Logo} alt="Logo"/>
                  </span>
    
                  <div className="text logo-text">
                      <span className="name">Codinglab</span>
                      <span className="profession">Web developer</span>
                  </div>
              </div> 
              
              <div className='toggle' onClick={()=>{
                 setOpen(!open)
              }}>
                <FaChevronRight size={14} /> 
              </div>
            </Header>
    
            <Menu> 
              <Item title='User' Icon={<FaUser/>} to={'/create/user'} />
              <Item title='Home' Icon={<FaHome/>} to={'/'}/>
              <Item title='Dashboard' Icon={<FaDailymotion/>} to={'#'}/> 
            </Menu>
    
            <Footer> 
              <Item Icon={<FaSign/>} title='Testing Icon' to={'#'}/>
          
              <li className="mode">
                <div className="sun-moon"> 
                    <FaMoon className='moon icon'/>
                    <FaSun className='icon sun'  /> 
                </div>
                <span className="mode-text text">Dark mode</span>
    
                <Toggle open={check}  onClick={()=>{ 
                    
                    setCheck(!check);
                }}/>
                
              </li>
            </Footer>
        </Sidebar>
    )
}
    
export default memo(SideBar)
    