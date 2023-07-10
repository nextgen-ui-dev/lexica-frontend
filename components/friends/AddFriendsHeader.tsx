'use client';

import React, { MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { AiOutlinePlus } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import Searchbar from '../core/molecules/Searchbar';

import useFindFriends from '@/hooks/useFindFriends';

interface FriendsHeaderProps {
  searchQuery: string;
  handleQuery: (newQuery: string) => void;
}

const AddFriendsHeader = ({ searchQuery, handleQuery }: FriendsHeaderProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const friends = useFindFriends();

  const handleRoute = (e: MouseEvent<HTMLDivElement>) => {
    const targetPath = e.currentTarget.getAttribute('data-path');
    if (targetPath) {
      router.push(targetPath);
    }
  };

  return (
    <div
      className={`flex flex-row justify-between items-center py-8 px-1.5 md:px-2`}
    >
      <div className="text-xl md:text-3xl text-slate-800 font-semibold">
        Cari Teman
      </div>

      {/* Add Friend */}
      <div
        className={`flex flex-row`}
        data-path={`/friends/add`}
        onClick={handleRoute}
      >
        {window.innerWidth > 768 ? (
          <Searchbar
            large
            placeholder="Cari lewat email"
            controlValue={searchQuery}
            controlCallback={e => {
              handleQuery(e.target.value);
            }}
          />
        ) : (
          <Searchbar
            mobile
            large
            placeholder="Cari lewat email"
            controlValue={searchQuery}
            controlCallback={e => {
              handleQuery(e.target.value);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AddFriendsHeader;
