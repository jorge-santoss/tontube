/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { BsFillCheckCircleFill } from "react-icons/bs";

import avatar from "../assets/avatar.png";
import thumbnail from "../assets/thumbnail.png";

import VideoLength from "./VideoLength.jsx";

import moment from "moment";

function Card({ video }) {
  return (
    <Link to={`/${video?.url}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-52 rounded-2xl overflow-hidden">
          <img
            src={video?.thumbnail ? video?.thumbnail : thumbnail}
            alt="thumbnails"
            className="h-full w-full object-cover"
          />
          {video.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden ">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col ml-3 overflow-hidden">
              <span className="text-sm font-semibold line-clamp-2 text-black dark:text-white">
                {video?.url}
              </span>
              <span className="text-[12px] font-semibold text-black/[0.7] dark:text-white/[0.7] flex items-center ">
                Tonton du bled
                <BsFillCheckCircleFill className="text-black/[0.5] dark:text-white/[0.5] text-[12px] ml-1" />
              </span>
              <div className="flex text-[12px] font-semibold text-black/[0.7] dark:text-white/[0.7] truncate overflow-hidden">
                <span className="truncate">
                  {moment(video?.uploaded_at).fromNow()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
