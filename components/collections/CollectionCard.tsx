import React from "react";
import Image from "next/image";
import Avatar from "../core/molecules/Avatar";
import { Collection } from "@/types/collection";
import { BiBookBookmark } from "react-icons/bi";

interface CollectionCardProps {
  collection: Collection;
  onClick?: () => void;
}

const CollectionCard = ({ collection, onClick }: CollectionCardProps) => {
  return (
    <div
      className={`
        relative flex flex-row md:flex-col justify-between items-center rounded-lg
        border border-primary-500 drop-shadow-md
        min-w-[160px] md:min-w-[240px] 
        min-h-[160px] md:min-h-[240px] 
        h-[160px] md:h-[280px] 
        bg-transparent
        hover:cursor-pointer
        overflow-hidden
        hover:scale-105 transition duration-300
        `}
      onClick={onClick}
    >
      <div
        className={`relative w-1/2 md:w-full min-h-full md:min-h-[160px] overflow-hidden group`}
      >
        <Image
          src={`images/no_image.png`}
          alt={collection.name}
          fill
          priority
          style={{
            objectFit: "cover",
          }}
          className="bg-primary-500 duration-300"
        />
      </div>

      <div
        className={`flex flex-col h-full w-full justify-start top-0 px-3 py-4`}
      >
        <div
          className={`text-md md:text-lg text-slate-700 font-semibold cursor-default`}
        >
          {collection.name}
        </div>

        <div className={`flex flex-row justify-start cursor-default py-1`}>
          <div className="w-[20px] h-[20px]">
            <Avatar small src={"/images/placeholder.png"} />
          </div>
          <div
            className={`text-sm md:text-md w-full pl-1 md:pl-1.5 text-slate-600 truncate`}
            title={collection.creatorName.toString()}
          >
            {collection.creatorName}
          </div>
        </div>

        <div
          className={`flex flex-row items-center text-sm md:text-md text-slate-600 cursor-default py-1`}
        >
          <BiBookBookmark className="text-[20px] w-[20px] text-primary-500" />
          <div className="ml-1 md:ml-1.5">
            {collection.articles.length} artikel
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
