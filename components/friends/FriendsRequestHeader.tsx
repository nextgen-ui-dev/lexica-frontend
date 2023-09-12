"use client";

import React, { MouseEvent } from "react";
import { useRouter } from "next/navigation";

import { FaUserFriends } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";

import Searchbar from "../core/molecules/Searchbar";

import useFriends from "@/hooks/useFriends";

interface FriendsHeaderProps {
  searchQuery: string;
  handleQuery: (newQuery: string) => void;
}

const FriendsRequestHeader = ({
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
        <div className="flex flex-row gap-x-4">
          <div
            className={`flex flex-row justify-center items-center min-h-[30px] min-w-[40px] px-2 py-0 rounded-xl bg-transparent hover:bg-primary-500 hover:cursor-pointer border border-primary-500 group duration-300`}
            data-path={`/friends`}
            onClick={handleRoute}
          >
            <MdArrowBackIosNew
              className={`text-lg md:text-xl text-primary-500 group-hover:text-white duration-300`}
            />
            {window.innerWidth > 768 && (
              <div
                className={`text-lg md:text-xl pl-1 py-2 text-primary-500 group-hover:text-white duration-300`}
              >
                Kembali
              </div>
            )}
          </div>
        </div>

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
        </div>
      </div>
    </div>
  );
};

export default FriendsRequestHeader;
