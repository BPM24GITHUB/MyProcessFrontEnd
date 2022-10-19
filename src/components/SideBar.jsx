import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import logo from '../data/MyProcess-cloud-couleur.png'

import {links} from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider';

const SideBar = () => {
  const {activeMenu,setActiveMenu,screenSize} = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-3 rounded-lg text-white text-md m-2 bg-blue-500';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-3 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const handleCloseSideBar = ()=>{
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  return (

    <div
      className='ml-3  h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'
    >
      {activeMenu && (
        <>
        <div className='flex justif-between items-center'>
          <Link to="/" onClick={handleCloseSideBar} 
              style={{width:"140px",height:"60px"}}
              className="items-center justify-content-center gap-3 m-4 w-20 "
          >
            <img  src={logo} alt="Logo MyProcess"></img>
          </Link>
          <TooltipComponent
            title="close"
            position="BottomCenter"
          >
            <button type='button'
                onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
                className= "text-xl rounded-full p-3 hover:bg-light-gray mt-3 ml-12 block text-red-700"
            >
              
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
          
        </div>
        <div
        className='mt-10'
      >
        {links.map((item) => (
          <div key={item.title}>
            <p className='text-gray-400 m-3 mt-4 uppercase' >
            {item.title}
            </p>
            {item.links.map((link)=>(
              <NavLink to={`/${link.name}`} 
                
                key={link.name}
                onClick={handleCloseSideBar}
                className={({isActive})=>isActive ? activeLink:normalLink}
              >  {link.icon}
              <span className='capitalize'>
              {link.name}
              </span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
       </>
     
      )}
    </div>

  )
}

export default SideBar