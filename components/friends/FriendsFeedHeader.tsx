"use client";

import React, { MouseEvent } from "react";
import { useRouter } from "next/navigation";

import { AiOutlinePlus } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";


import Searchbar from "../core/molecules/Searchbar";

import useFriends from "@/hooks/useFriends";

interface FriendsHeaderProps {
  searchQuery: string;
  handleQuery: (newQuery: string) => void;
}

const FriendsFeedHeader = ({
  searchQuery,
  handleQuery,
}: FriendsHeaderProps) => {
  const router = useRouter();
  const friends = useFriends();

  const handleRoute = (e: MouseEvent<HTMLDivElement>) => {
    const targetPath = e.currentTarget.getAttribute("data-path");
    if (targetPath) {
      router.push(targetPath);
    }
  };

  return (
    <div className="pt-12 pb-8 md:pt-8">
      <div
        className={`sticky top-0 flex flex-row justify-between items-center`}
      >
        {/* Add Friend */}
        <div className={`flex flex-row gap-x-4`}>
          <div>
            {window.innerWidth > 768 ? (
              <Searchbar
                large
                placeholder="Cari nama/email"
                controlValue={searchQuery}
                controlCallback={(e) => {
                  handleQuery(e.target.value);
                }}
              />
            ) : (
              <Searchbar
                mobile
                large
                placeholder="Cari nama/email"
                controlValue={searchQuery}
                controlCallback={(e) => {
                  handleQuery(e.target.value);
                }}
              />
            )}
          </div>
          <div
            className={`flex flex-row items-center justify-center px-2 py-0 rounded-xl bg-transparent hover:bg-primary-500 hover:cursor-pointer border border-primary-500 group duration-300`}
            data-path={`/friends/add`}
            onClick={handleRoute}
          >
            <AiOutlinePlus
              className={`text-lg md:text-xl text-primary-500 group-hover:text-white duration-300 md:-translate-y-[1px]`}
            />

            {window.innerWidth > 768 && (
              <div
                className={`pl-1 text-base md:text-lg text-primary-500 group-hover:text-white duration-300`}
              >
                Tambah
              </div>
            )}
          </div>
        </div>
        <div
          className={`flex flex-row items-center justify-center md:flex-row text-lg text-slate-700 group py-1 bg-primary-200 px-4 rounded-full`}
        >
          <div className="group-hover:text-primary-500">
            {friends.friendsCount}
          </div>
          <FaUserFriends className="ml-2 group-hover:text-primary-500 duration-300" />
        </div>
      </div>
    </div>
  );
};

export default FriendsFeedHeader;
