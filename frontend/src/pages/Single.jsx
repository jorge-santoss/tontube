import { useParams } from "react-router";

// CSS pour le lecteur
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";

// Lecteur importé
import { MediaPlayer, MediaProvider } from "@vidstack/react";

// Icone
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

import { BsFillCheckCircleFill } from "react-icons/bs";

import avatar from "../assets/avatar.png";
import thumbnail from "../assets/thumbnail.png";

import { getVideoUrl } from "../api/videos";

function Single() {
  const params = useParams();
  const src = getVideoUrl(params.id); // construit l’URL depuis api/videos.js

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-white dark:bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <MediaPlayer title={params.id} src={src}>
              <MediaProvider />
              <PlyrLayout thumbnails={thumbnail} icons={plyrLayoutIcons} />
            </MediaPlayer>
          </div>

          <div className="text-black dark:text-white font-semibold text-sm md:text-xl mt-4 line-clamp-2">
            {params.id}
          </div>

          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start ">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3 ">
                <div className="text-black dark:text-white text-md font-semibold flex items-center">
                  Tonton du bled
                  <BsFillCheckCircleFill className="text-black/[0.5] dark:text-white/[0.5] text-[12px] ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
