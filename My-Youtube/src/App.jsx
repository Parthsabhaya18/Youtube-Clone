import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Search from './Components/Search'
import PlayingVideo from './Components/PlayingVideo'
import { useAuth } from './Context/AuthProvider'
import Loading from './loader/Loading'

export default function  () {

  const {loading} = useAuth()

  return (
    <div>
      {loading && <Loading/>}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search/:searchQuery" element={<Search/>}/>
        <Route path="/video/:id" element={<PlayingVideo/>}/>
      </Routes>
    </div>
  )
}
