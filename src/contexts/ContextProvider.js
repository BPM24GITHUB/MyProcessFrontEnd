import React,{createContext,useContext,useState } from "react";

const StateContext = createContext();

const initialState = {
    chat:false,
    card:false,
    userProfile:false,
    notification:false
};

export const ContextProvider = ({ children }) => {
    const [ activeMenu,setActiveMenu] = useState(true);
    const [isClicked,setIsClicked] = useState(initialState);
    const [screenSize,setScreenSize] = useState(undefined);
    const [isLogin,setIsLogin] = useState(true);

     const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider
            value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,isLogin,setIsLogin}}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);