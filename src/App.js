import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { NavBar,Footer,ThemeSetting,SideBar } from './components';
import { Dashboard,Inbox,Complete,Calendar,ColorMapping,
    Line,Pyramid,Stacked,
    ColorPicker,Kanban,Archive,Area,Bar,Pie,Financial,Editor, Login } from './pages'

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
    const {activeMenu,isLogin} = useStateContext();

  return (
    <BrowserRouter>
    {isLogin ? (
       <Login />
     ): ( 
            <div className='flex relative dark:bg-main-dark-bg' >
            <div className='fixed right-3 bottom-4' style={{ zIndex:1000 }}>
                <TooltipComponent content={"Settings"} position="Top">
                    <button type='button'
                        className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                        style={{background:'blue', borderRadius:"50%"}}
                    >
                        <FiSettings />
                    </button>
                </TooltipComponent>
            </div>
            {activeMenu ? (
                <div 
                    className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'
                > <SideBar /> </div>
            ):(
                <div 
                    className='w-0 dark:bg-secondary-dark-bg'
                > <SideBar /></div>
            )}
        
            <div
                className={
                    activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full':
                                  'dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2'
                }
            >
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                    <NavBar/>
                </div>
        
            
            <div>
        
        
            <Routes>
                         {/* Dashboard */}
                <Route path='/' element={<Dashboard/>} />
                <Route path='/Dashboard' element={<Dashboard/>} />
                        {/* Pages  */}
                <Route path='/Inbox' element={<Inbox/>} />
                <Route path='/Complete' element={<Complete/>} />
                <Route path='/Archive' element={<Archive/>} />
                        {/* App  */}
                <Route path='/Kanban' element={<Kanban/>} />
                <Route path='/Editor' element={<Editor/>} />
                <Route path='/Calendar' element={<Calendar/>} />
                <Route path='/ColorPicker' element={<ColorPicker/>} />
                        {/* Chart  */}
                <Route path='/Line' element={<Line/>} />
                <Route path='/Area' element={<Area/>} />
                <Route path='/Bar' element={<Bar/>} />
                <Route path='/Pie' element={<Pie/>} />
                <Route path='/Financial' element={<Financial/>} />
                <Route path='/color-mapping' element={<ColorMapping/>} />
                <Route path='/Pyramid' element={<Pyramid/>} />
                <Route path='/stacked' element={<Stacked/>} />
        
            </Routes>
        </div>
        </div>
            </div>
    )}

</BrowserRouter>
  )
    
   
  
}

export default App