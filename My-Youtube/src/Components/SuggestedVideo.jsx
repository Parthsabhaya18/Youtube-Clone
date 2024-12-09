import { abbreviateNumber } from 'js-abbreviation-number'
import React from 'react'
import Time from '../loader/Time'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function SuggestedVideo({Video}) {

  return (
    <div>
        <Link to={`/video/${Video?.videoId}`}>
        <div className=" flex mb-4 gap-4">
          {/* Thumbnail & duration */}
          <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200">
            <img
              className="h-full w-full rounded-lg"
              src={Video?.thumbnails[0]?.url}
              alt=""
            />
            {Video?.lengthSeconds && <Time time={Video?.lengthSeconds} />}
          </div>

          {/* channel logo &  title  */}
          <div className="flex  space-x-2">
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

              <div className="flex flex-col text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  Video?.stats?.views,
                  2
                )} views`}</span>
                <span className='flex items-center relative bottom-2 right-1'>
                <span className="text-[24px] leading-none font-bold relative top-[-7px] mx-1">
                  .
                </span>
                <span>{Video?.publishedTimeText}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
