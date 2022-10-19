import React from 'react'
import logo from '../data/Logo.png';
import frame from '../data/Frame.png';
import { useStateContext } from '../contexts/ContextProvider';
import './Login.css';

const Login = () => {
    const {setIsLogin} = useStateContext();
  return (
    <div className='LoginStyle' 
            
    >
       <div className='block-login'>
            <img src={logo} className="logo-login" />
        <div className="form-login">
            <div className="mb-4">
                <input className="text-box" type="text" placeholder="username@email.com"/>
            </div>
            <div className="mt-4">
                <input className="text-box" type="password" placeholder="**********"/>
            </div>
            <div className="mt-4">
                <button className="button-box hover:bg-blue-700" onClick={()=>setIsLogin(false)} >
                    Login    
                </button>
               
            </div>
            <div className='mt-2 ml-12'>
               <label className='forget-password hover:inline'>Forget password</label>
            </div>
           
        </div>
       </div>
       <div className='description-login'>
            <h1 className='decription-login-h1'>Welcome to MyProcess Cloud</h1>
            <p className='decription-login-p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque venenatis non tellus a rhoncus. Curabitur eget urna id turpis molestie mattis. 
                 Integer fringilla nisl imperdiet facilisis venenatis.
            </p>
       </div>
        <div>
        <img src={frame} className="logo-bpm24-login" />
        </div>
    </div>
  )
}

export default Login