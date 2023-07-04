"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {};

const Library = (props: Props) => {
  const onClick = () => {
    // TODO : Handle upload later
  };

  return (
    <div className="flex flex-col">
      <div
        className="flex 
    items-center
    justify-between
    px-5
    pt-4
    "
      >
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={onClick}
          size={20}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs!</div>
    </div>
  );
};

export default Library;