import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import Logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../Context/UtilsContext";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setSidebar, mobileShow, setMobileShow } = useUtils();

  useEffect(() => {
    console.log({ isSidebar, mobileShow });
  }, [isSidebar]);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
    }
  };

  function handleSidebar() {
    if (window.innerWidth <= 1280) {
      setSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    } else {
      setSidebar(!isSidebar);
    }
  }
  function change() {
    navigate(`/`);
  }

  return (
    <div className="flex justify-between  fixed top-0 w-[100%] bg-white px-0 py-2 sm:px-6">
      <div className="sm:flex items-center space-x-4">
        <AiOutlineMenu
          className="text-5xl cursor-pointer hover:bg-gray-200 p-2 rounded-full "
          onClick={handleSidebar}
        />
        <img src={Logo} alt="" className="sm:w-28 hidden md:block" onClick={change} />
      </div>

      <div className="flex w-[75%] md:w-[52%] items-center ">
        <div className="md:w-[100%] border px-4  border-gray-400 py-2 rounded-l-full sm:w-[20%]">
          <input
            type="search"
            placeholder="Search"
            className="outline-none w-[100%]"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            value={searchQuery}
            onKeyUp={searchQueryHandler}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full hover:bg-gray-200"
          onClick={(event) => {
            searchQueryHandler("searchButton");
          }}>
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"38px"}
          className="ml-3 w-24 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200 sm:w-14"
        />
      </div>

      <div className=" flex items-center w-24 sm:flex space-x-0 hidden">
        <RiVideoAddFill
          size={"36px"}
          className=" hover:bg-gray-200 p-2 cursor-pointer rounded-full"
        />
        <AiOutlineBell
          size={"36px"}
          className=" hover:bg-gray-200 p-2 cursor-pointer rounded-full"
        />
        <Avatar src={profile} size="36" round={true} />
      </div>
    </div>
  );
}
