"use client";

import React from "react";

import Avatar from "../core/molecules/Avatar";
import { User } from "@/types/session";
import { LuTrash } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";

import useFriends from "@/hooks/useFriends";

interface FriendRowItemProps {
  friend: User;
}

const FriendRowItem = ({ friend }: FriendRowItemProps) => {
  const friends = useFriends();

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

      <div className={`flex flex-row justify-center items-center`}>
        <div
          className={`flex flex-row items-center mr-2 md:mr-4 
        text-slate-600 hover:text-red-500 hover:cursor-pointer duration-300`}
          onClick={() => friends.removeFriends(friend.email!)}
        >
          {/* @Jere TODO add modal confirmation for deleting friends */}
          <LuTrash />
          {window.innerWidth > 768 ? (
            <>
              <div className="px-1"></div>
              Hapus
            </>
          ) : null}
        </div>
        <span className="w-[8px] h-[0px]"></span>
        <div
          className={`flex flex-row items-center mr-2 md:mr-4 
        text-slate-600 hover:text-primary-500 hover:cursor-pointer duration-300 translate-y-[1px]`}
        >
          <BsChatLeftText />
          {window.innerWidth > 768 ? (
            <>
              <div className="px-1"></div>
              Chat
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FriendRowItem;
