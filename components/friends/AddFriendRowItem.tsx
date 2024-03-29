/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import { User } from "@/types/session";
import Avatar from "../core/molecules/Avatar";
import { BsPersonPlus, BsPersonDashFill } from "react-icons/bs";
import useFriends from "@/hooks/OlduseFriends";

interface FriendRowItemProps {
  friend: User;
}

const AddFriendRowItem = ({ friend }: FriendRowItemProps) => {
  const friends = useFriends();
  const [isFriend, setIsFriend] = React.useState(false);

  return (
    <div
      className={`w-full flex flex-row justify-between py-1 md:py-2 hover:bg-gray-100 duration-300`}
    >
      <div className="flex flex-row">
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
        className={`
        flex flex-row items-center mr-2 md:mr-4 
        text-slate-600 
        ${!isFriend ? "hover:text-primary-500" : "hover:text-red-500"}
        hover:cursor-pointer duration-300`}
        onClick={() => {
          if (!friends.isFriend(friend.email!)) {
            friends.addFriends(friend);
          } else {
            friends.removeFriends(friend.email!);
          }

          setIsFriend(!isFriend);
        }}
      >
        <div className="w-[20px]">
          {!friends.isFriend(friend.email!) ? (
            <BsPersonPlus />
          ) : (
            <BsPersonDashFill />
          )}
        </div>

        <div className="px-1"></div>

        {window.innerWidth > 768 ? (
          <div className="w-[50px]">
            {!friends.isFriend(friend.email!) ? (
              <div>Tambah</div>
            ) : (
              <div>Hapus</div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AddFriendRowItem;
