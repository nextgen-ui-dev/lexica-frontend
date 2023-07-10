"use client";

import React from "react";

import Avatar from "../core/molecules/Avatar";
import { User } from "@/types/session.type";
import { FaTrash } from "react-icons/fa";

interface FriendRowItemProps {
  friend: User;
}

const FriendRowItem = ({ friend }: FriendRowItemProps) => {
  return (
    <div
      className={`w-full flex flex-row items-center justify-between py-1 border-b md:py-2 hover:bg-primary-100 transition ease-out duration-200`}
    >
      <div className="flex flex-row items-center">
        <div className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px]">
          {window.innerWidth > 768 ? (
            <Avatar large src={friend.image} />
          ) : (
            <Avatar src={friend.image} />
          )}
        </div>

        <div className="px-2"></div>

        <div className={`flex flex-col`}>
          <div className="text-slate-800">{friend.name}</div>
          <div className="text-slate-600">{friend.email}</div>
        </div>
      </div>

      <div
        className={`flex flex-row items-center mr-2 md:mr-4 
      text-slate-600 hover:text-red-500 hover:cursor-pointer duration-300`}
      >
        <FaTrash />
        {window.innerWidth > 768 ? (
          <>
            <div className="px-1"></div>
            Hapus
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FriendRowItem;
