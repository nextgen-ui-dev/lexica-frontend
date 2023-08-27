"use client";

import React, { MouseEvent } from "react";
import { useRouter } from "next/navigation";

import { FaUserFriends } from "react-icons/fa";
import Searchbar from "../core/molecules/Searchbar";

interface FriendsHeaderProps {
  searchQuery: string;
  handleQuery: (newQuery: string) => void;
}

const AddFriendsHeader = ({ searchQuery, handleQuery }: FriendsHeaderProps) => {
  const router = useRouter();

  const handleRoute = (e: MouseEvent<HTMLDivElement>) => {
    const targetPath = e.currentTarget.getAttribute("data-path");
    if (targetPath) {
      router.replace(targetPath);
    }
  };

  return (
    <div
      className={`flex flex-row justify-between items-center py-8 px-1.5 md:px-2`}
    >
      <div className="flex flex-row gap-x-4">
        {window.innerWidth > 768 && (
          <div className="text-xl md:text-2xl text-slate-800 font-semibold">
            Hasil Pencarian
          </div>
        )}
        <div
          className={`flex flex-row justify-center items-center min-h-[30px] min-w-[40px] px-2 py-0 rounded-xl bg-transparent hover:bg-primary-500 hover:cursor-pointer border border-primary-500 group duration-300`}
          data-path={`/friends`}
          onClick={handleRoute}
        >
          <FaUserFriends
            className={`text-lg md:text-2xl text-primary-500 group-hover:text-white duration-300`}
          />
          {window.innerWidth > 768 && (
            <div
              className={`pl-1 text-primary-500 group-hover:text-white duration-300`}
            >
              Kembali
            </div>
          )}
        </div>
      </div>

      {/* Add Friend */}
      <div
        className={`flex flex-row`}
        data-path={`/friends/add`}
        onClick={handleRoute}
      >
        {window.innerWidth > 768 ? (
          <Searchbar
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
  );
};

export default AddFriendsHeader;
