import { useState,useContext,createContext } from "react";

const UtilsContext = createContext(null);

export default function UtilsContextProvider({children}) {

    const [isSidebar,setSidebar] = useState(false);
    const [mobileShow,setMobileShow] = useState(false);

  return <UtilsContext.Provider value={{isSidebar,setSidebar,mobileShow,setMobileShow}}>
    {children}
  </UtilsContext.Provider>
}

export const useUtils = ()=>{
    const utilsContext = useContext(UtilsContext);

    if(!utilsContext) return null;

    return utilsContext;
}