import Footer from 'baseComponents/Footer';
import Header from 'baseComponents/Header';
import Item from 'baseComponents/Item';
import Menu from 'baseComponents/Menu';
import Sidebar from 'baseComponents/Sidebar';
import Toggle from 'components/Toggle';
import React, { memo, useState } from 'react'
import { FaChevronRight, FaDailymotion, FaHome, FaMoon, FaSign, FaSun, FaUser } from 'react-icons/fa';
 
import Logo from 'assets/logo.jpg';
import { useTheme } from 'hooks/useTheme';

const SideBar = () => {
     
    const {toggle,mode} = useTheme();

    const [check, setCheck] = useState<boolean>(mode === 'dark');
   
    const [open,setOpen] = useState(false);
    
    return (
        <Sidebar open={open}>
          <Header> 
              <div className="image-text">
                  <span className="image ">
                      <img src={Logo} alt="Logo"/>
                  </span>
    
                  <div className="text logo-text">
                      <span className="name">Testing Project</span>
                      <span className="profession">Web App</span>
                  </div>
              </div> 
              
              <div className='toggle' onClick={()=>{
                 setOpen(!open)
              }}>
                <FaChevronRight size={14} /> 
              </div>
            </Header>
    
            <Menu> 
              <Item title='Create User' Icon={<FaUser/>} to={'/create/user'} />
              <Item title='Create Post' Icon={<FaHome/>} to={'/create/post'}/>
              <Item title='Create Tag' Icon={<FaDailymotion/>} to={'/create/tag'}/> 
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
                    toggle?.();
                    setCheck(!check);
                }}/>
                
              </li>
            </Footer>
        </Sidebar>
    )
}
    
export default memo(SideBar)
    