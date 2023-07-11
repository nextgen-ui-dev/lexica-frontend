"use client";

import React, { MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

import { BsCollection, BsBarChart, BsPeople } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { User } from "@/types/session";

interface ProfileDropdownProps {
  user?: User;
  toggleExpand: () => void;
}

const ProfileDropdown = ({ user, toggleExpand }: ProfileDropdownProps) => {
  const router = useRouter();

  const handleRoute = (e: MouseEvent<HTMLDivElement>) => {
    const targetPath = e.currentTarget.getAttribute("data-path");
    if (targetPath) {
      toggleExpand();
      router.push(targetPath);
    }
  };

  return (
    <>
      <div
        className={`
          flex flex-col 
          absolute 
          ${window.innerWidth > 768 ? "top-[43px]" : "top-[38px]"}
          right-[4px] md:right-[10px] 
          bg-gray-100 rounded-xl border border-gray-500
          duration-300 transition ease-in-out
        `}
      >
        <div className={`px-2 md:px-3 pt-2`}>
          <div className="text-slate-800 font-semibold">{user?.name}</div>
          <div className="text-slate-600">{user?.email}</div>
        </div>

        <div className={`bg-primary-100 my-[6px]`}>
          <div
            data-path="/friends"
            onClick={handleRoute}
            className={`flex flex-row 
            px-2 md:px-3 py-[3px] md:py-[4px] 
            hover:bg-primary-400
            hover:text-white 
            hover:cursor-pointer
            text-slate-700
            `}
          >
            <BsPeople className="mr-2" strokeWidth={0.5} />
            <h5>Teman</h5>
          </div>
          <div
            data-path="/collections"
            onClick={handleRoute}
            className={`flex flex-row 
            px-2 md:px-3 py-[3px] md:py-[4px] 
            hover:bg-primary-400
            hover:text-white 
            hover:cursor-pointer
            text-slate-700
            `}
          >
            <BsCollection className="mr-2" strokeWidth={0.5} />
            <h5>Koleksi</h5>
          </div>
          <div
            data-path="/analytics"
            onClick={handleRoute}
            className={`flex flex-row 
            px-2 md:px-3 py-[3px] md:py-[4px] 
            hover:bg-primary-400
            hover:text-white 
            hover:cursor-pointer
            text-slate-700
            `}
          >
            <BsBarChart className="mr-2" strokeWidth={0.5}/>
            <h5>Performaku</h5>
          </div>
        </div>

        <div
          className={`flex flex-row 
            px-2 pb-2
            hover:cursor-pointer
            text-slate-700
            group
            `}
          onClick={() => signOut()}
        >
          <BiLogOut className="mr-2 mt-[2px] group-hover:text-red-500 duration-300" strokeWidth={0.5} />
          <h5 className="group-hover:text-red-500 duration-300">Keluar</h5>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
