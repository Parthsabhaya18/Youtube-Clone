import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

export default function Video({ Video }) {
  return (
    <div className="">
      <Link to={`/video/${Video?.videoId}`}>
        <div className=" flex flex-col">
          {/* Thumbnail & duration */}
          <div className="relative md: rounded-xl hover:rounded-none duration-200  overflow-hidden">
            <img
              className="h-full w-full"
              src={Video?.thumbnails[0]?.url}
              alt=""
            />
            {Video?.lengthSeconds && <Time time={Video?.lengthSeconds} />}
          </div>

          {/* channel logo &  title  */}
          <div className="flex mt-3 space-x-2">
            <div className="flex items-start">
              <div className="h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className=" rounded-full overflow-hidden"
                  src={Video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2 ">
                {Video?.title}
              </span>

              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {Video?.author?.title}
                {Video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>

              <div className="flex text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  Video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{Video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
