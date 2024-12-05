import React from 'react'
import { GoHome, GoLightBulb } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory, MdWatchLater, MdOutlinePlaylistAddCheck, MdNewspaper, MdOutlineFlag, MdOutlineHelpOutline, MdOutlineFeedback } from "react-icons/md";
import { IoMusicalNoteOutline, IoSettingsSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { TbHanger2 } from "react-icons/tb";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { BsTrophy } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import {  CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiLike, BiVideo } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {

    let navigate = useNavigate();

    function change(){
        navigate(`/`)
    }

    const sidebarItems=[
        {
            id:1,
            name:"Home" ,
            icon:<GoHome onClick={change}/>
        },
        {
            id:1,
            name:"Shorts",
            icon:<SiYoutubeshorts/>
        },
        {
            id:1,
            name:"Subscription",
            icon:<MdOutlineSubscriptions/>
        },
    ];

    const sidebarItems2=[
        
        {
            id:1,
            name:"History",
            icon:<MdHistory/>
        },
        {
            id:2,
            name:"Playlists",
            icon:<MdOutlinePlaylistAddCheck/>
        },
        {
            id:3,
            name:"Your Videos",
            icon:<BiVideo/>
        },
        {
            id:4,
            name:"Your cources",
            icon:<GoLightBulb/>
        },
        {
            id:5,
            name:"Watch Later",
            icon:<MdWatchLater/>
        },
        {
            id:6,
            name:"Liked Videos",
            icon:<BiLike/>
        },
    ]

    const sidebarItems3=[
        
        {
            id:1,
            name:"Trending",
            icon:<SiTrendmicro/>
        },
        {
            id:2,
            name:"Shopping",
            icon:<HiOutlineShoppingBag/>
        },
        {
            id:3,
            name:"Music",
            icon:<IoMusicalNoteOutline/>
        },
        {
            id:4,
            name:"Films",
            icon:<PiFilmSlateLight/>
        },
        {
            id:5,
            name:"Live",
            icon:<CgMediaLive/>
        },
        {
            id:6,
            name:"Gaming",
            icon:<SiYoutubegaming/>
        },
        {
            id:7,
            name:"News",
            icon:<MdNewspaper/>
        },
        {
            id:8,
            name:"Sport",
            icon:<BsTrophy/>
        },
        {
            id:9,
            name:"Cources",
            icon:<GoLightBulb/>
        },
        {
            id:10,
            name:"Fashion & beauty",
            icon:<TbHanger2/>
        },
        {
            id:11,
            name:"Podcasts",
            icon:<MdPodcasts/>
        },
    ]

    const sidebarItems4=[
        
        {
            id:1,
            name:"YouTube Premium",
            icon:<FaYoutube/>
        },
        {
            id:2,
            name:"YouTube Studio",
            icon:<SiYoutubestudio/>
        },
        {
            id:3,
            name:"YouTube Music",
            icon:<SiYoutubemusic/>
        },
        {
            id:4,
            name:"YouTube Kids",
            icon:<SiYoutubekids/>
        },
       
    ]

    const sidebarItems5=[
        
        {
            id:1,
            name:"Settings",
            icon:<IoSettingsSharp/>
        },
        {
            id:2,
            name:"Report history",
            icon:<MdOutlineFlag/>
        },
        {
            id:3,
            name:"Help",
            icon:<MdOutlineHelpOutline/>
        },
        {
            id:4,
            name:"Send feedback",
            icon:<MdOutlineFeedback/>
        },
       
    ]






  return (
   <div className='px-6 text-[14px] w-[25%] h-[calc(100vh-6.625rem)] overflow-y-scroll  overflow-x-hidden'>

    {/* Home  */}

    <div className='space-y-3 items-center'>

       {
        sidebarItems.map((item)=>{
            return(
                <div  key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                    <div className='text-xl cursor-pointer'>{item.icon}</div>
                    <span className=' cursor-pointer'>{item.name}</span>
                </div>
            )
        })
       }

    </div>
    <br />
    <hr />


       {/* you  */}
    <div className='mt-4 space-y-3 items-center'>
        <div className='flex items-center space-x-2'>
            <h1>You</h1>
            <FaChevronRight/>
        </div>
       {
        sidebarItems2.map((item)=>{
            return(
                <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                    <div className='text-xl cursor-pointer'>{item.icon}</div>
                    <span className='cursor-pointer'>{item.name}</span>
                </div>
            )
        })
       }

    </div>
    <br />
    <hr />

       {/* Explore  */}
    <div className='mt-4 space-y-3 items-center'>
        <div className='items-center space-x-2'>
            <h1 className='font-semibold'>Explore</h1>
        </div>
       {
        sidebarItems3.map((item)=>{
            return(
                <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                    <div className='text-xl cursor-pointer'>{item.icon}</div>
                    <span className='cursor-pointer'>{item.name}</span>
                </div>
            )
        })
       }

    </div>
    <br />
    <hr />


       {/* More video from youtube  */}
    <div className='mt-4 space-y-3 items-center'>
        <div className='items-center space-x-2'>
            <h1 className='font-semibold'>More From YouTube</h1>
        </div>
       {
        sidebarItems4.map((item)=>{
            return(
                <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                    <div className='text-xl cursor-pointer text-red-500'>{item.icon}</div>
                    <span className='cursor-pointer'>{item.name}</span>
                </div>
            )
        })
       }

    </div>
    <br />
    <hr />

        {/* other  */}

    <div className='mt-4 space-y-3 items-center'>
       {
        sidebarItems5.map((item)=>{
            return(
                <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                    <div className='text-xl cursor-pointer'>{item.icon}</div>
                    <span className='cursor-pointer'>{item.name}</span>
                </div>
            )
        })
       }

    </div>
    <br />
    <hr />


    <br />
       <p className='text-xs font-semibold text-gray-600'>About Press Copyright <br /> Contact us Creators <br /> Advertise Developers <br />
       <br />
       <p className='text-xs font-semibold text-gray-600'>Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test new features</p>
       </p><br />
       <p className='text-xs text-gray-500 mt-1'>© 2024 Google LLC</p>
   </div>
  )
}
