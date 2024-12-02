import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import Logo from '../../public/logo.png'
import profile from '../../public/profile.jpg'
import Avatar from 'react-avatar';

export default function Navbar() {
  return (
    <div className='flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2'>

        <div className='flex items-center space-x-4'>
            <AiOutlineMenu className='text-4xl cursor-pointer hover:bg-gray-200 p-2 rounded-full'/>
            <img src={Logo} alt="" className='w-28' />
        </div>

        <div className='flex w-[40%] items-center '>
            <div className='w-[100%] border px-3 py-2 rounded-l-full'>
                <input type="text" placeholder='Search' className='outline-none' />
            </div>
            <button className='px-4 py-2 border bg-gray-100 rounded-r-full hover:bg-gray-200'>
                 <CiSearch size={"24px"}/>
            </button>
            <IoMdMic size={"38px"} className='ml-3 w-12 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200'/>
        </div>

        <div className=' flex space-x-3  items-center'>
            <RiVideoAddFill size={"38px"} className=' hover:bg-gray-200 p-2 cursor-pointer rounded-full'/>
            <AiOutlineBell size={"38px"} className=' hover:bg-gray-200 p-2 cursor-pointer rounded-full'/>
            <Avatar src={profile} size='45' round={true}/>
        </div>
    </div>
  )
}
