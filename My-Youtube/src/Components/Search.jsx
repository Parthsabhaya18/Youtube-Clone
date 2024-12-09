import React, { useEffect, useState } from 'react'
import {fetchData} from "../Utilies/rapidapi"
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import SearchCard from './SearchCard';
export default function Search() {

  const [result,setResult] = useState();
  const {searchQuery} = useParams();

  useEffect(()=>{
    fetchSearch();
  },[searchQuery])

  function fetchSearch(){
      fetchData(`search/?q=${searchQuery}`)
      .then(({ contents })=>{
        console.log(contents);
        setResult(contents)
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  return (
    <>
      <div className='mt-24 flex flex-row h-[calc(100%-56px)]'>

        <Sidebar/>

        <div className="grow h-[calc(100vh-6.625rem)] overflow-y-scroll w-[172%] overflow-x-hidden">
          <div className=" grid grid-cols-1 gap-2 p-2">
          {result?.map((item, index) => {
              if (item?.type !== "video") return false;
              return <SearchCard key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </>
  )
}
