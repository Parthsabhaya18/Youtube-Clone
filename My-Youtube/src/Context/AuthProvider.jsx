import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import { fetchData } from '../Utilies/rapidapi';

export const AuthContext = createContext();


export default function AuthProvider({children}) {

    const [loading,setloading] = useState(false);
    const [data,setData]=useState([]);
    const [value,setValue]=useState("New");

    useEffect(()=>{
        fetchAllData(value)
    },[value])

    const fetchAllData=(query)=>{
        setloading(true)
       fetchData(`search/?q=${query}`) //passing parameter from rapidapi.js
       .then(({contents})=>{
            setData(contents) 
            setloading(false)
       }) 

    }

  return (
    <AuthContext.Provider value={{loading,data,value,setValue}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>useContext(AuthContext);