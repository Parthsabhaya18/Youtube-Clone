import React from "react";
import { GoHome, GoLightBulb } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdWatchLater,
  MdOutlinePlaylistAddCheck,
  MdNewspaper,
  MdOutlineFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
} from "react-icons/md";
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
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiLike, BiVideo } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../Context/UtilsContext";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from '../../public/logo.png'
export default function Sidebar() {
  const {isSidebar,setSidebar, mobileShow, setMobileShow} = useUtils();

  let navigate = useNavigate();

  function change() {
    navigate(`/`);
  }

  const sidebarItems = [
    {
      groupName: "Home",
      groupItems: [
        {
          id: 1,
          name: "Home",
          icon: <GoHome onClick={change}/>,
        },
        {
          id: 1,
          name: "Shorts",
          icon: <SiYoutubeshorts />,
        },
        {
          id: 1,
          name: "Subscription",
          icon: <MdOutlineSubscriptions />,
        },
      ],
    },
    {
      groupname: "You",
      groupItems: [
        {
          id: 1,
          name: "History",
          icon: <MdHistory />,
        },
        {
          id: 2,
          name: "Playlists",
          icon: <MdOutlinePlaylistAddCheck />,
        },
        {
          id: 3,
          name: "Your Videos",
          icon: <BiVideo />,
        },
        {
          id: 4,
          name: "Your cources",
          icon: <GoLightBulb />,
        },
        {
          id: 5,
          name: "Watch Later",
          icon: <MdWatchLater />,
        },
        {
          id: 6,
          name: "Liked Videos",
          icon: <BiLike />,
        },
      ],
    },
    {
      groupname: "Explore",
      groupItems: [
        {
          id: 1,
          name: "Trending",
          icon: <SiTrendmicro />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <HiOutlineShoppingBag />,
        },
        {
          id: 3,
          name: "Music",
          icon: <IoMusicalNoteOutline />,
        },
        {
          id: 4,
          name: "Films",
          icon: <PiFilmSlateLight />,
        },
        {
          id: 5,
          name: "Live",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <SiYoutubegaming />,
        },
        {
          id: 7,
          name: "News",
          icon: <MdNewspaper />,
        },
        {
          id: 8,
          name: "Sport",
          icon: <BsTrophy />,
        },
        {
          id: 9,
          name: "Cources",
          icon: <GoLightBulb />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <TbHanger2 />,
        },
        {
          id: 11,
          name: "Podcasts",
          icon: <MdPodcasts />,
        },
      ],
    },
    {
      groupname: "More From Youtube",
      groupItems: [
        {
          id: 1,
          name: "YouTube Premium",
          icon: <FaYoutube />,
        },
        {
          id: 2,
          name: "YouTube Studio",
          icon: <SiYoutubestudio />,
        },
        {
          id: 3,
          name: "YouTube Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "YouTube Kids",
          icon: <SiYoutubekids />,
        },
      ],
    },
    {
      groupname: "Setting",
      groupItems: [
        {
          id: 1,
          name: "Settings",
          icon: <IoSettingsSharp />,
        },
        {
          id: 2,
          name: "Report history",
          icon: <MdOutlineFlag />,
        },
        {
          id: 3,
          name: "Help",
          icon: <MdOutlineHelpOutline />,
        },
        {
          id: 4,
          name: "Send feedback",
          icon: <MdOutlineFeedback />,
        },
      ],
    },
  ];

  const ModelOverlay=()=>{
    return(
        <div className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
         onClick={()=>setMobileShow(!mobileShow)}>

        </div>
    )
  }
  function handleSidebar(){
    if(window.innerWidth <= 1280){
      setSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    else{
      setSidebar(!isSidebar)
    }
  }
  return (
    <>
      <div className={`${
          mobileShow 
          ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[50%] sm:w-[22%]" 
          :"hidden h-[calc(100vh-6.625rem)]  w-[30%]"
        } xl:static lg:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden  `}>
           <div className='flex items-center space-x-4 lg:hidden'>
            <AiOutlineMenu className='text-4xl cursor-pointer hover:bg-gray-200 p-2 rounded-full' onClick={handleSidebar} />
            <img src={Logo} alt="" className='w-24 ' />
           </div>
        <div className="space-y-3 items-center ">
          {sidebarItems.map((group) => {
            return (
              <div>
                <h1 className="font-bold mb-3">{group.groupname}</h1>
                {group.groupItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-6 hover:bg-gray-300 mb-2 duration-300 rounded-xl p-1"
                  >
                    <div className="text-sm cursor-pointer" >{item.icon}</div>
                    <span className="text-sm cursor-pointer">{item.name}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <br />
        <hr />
        <br />
        <p className="text-xs font-semibold text-gray-600">
          About Press Copyright <br /> Contact us Creators <br /> Advertise
          Developers <br />
          <br />
          <p className="text-xs font-semibold text-gray-600">
            Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test
            new features
          </p>
        </p>
        <br />
        <p className="text-xs text-gray-500 mt-1">© 2024 Google LLC</p>
      </div>

      {
        mobileShow ? <ModelOverlay/> : null
      }
    </>
  );
}
