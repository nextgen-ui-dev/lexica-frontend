'use client';

import React, { MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { AiOutlinePlus } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import Searchbar from '../core/molecules/Searchbar';

import useFindFriends from '@/app/hooks/useFindFriends';

interface FriendsHeaderProps {
  searchQuery: string;
  handleQuery: (newQuery: string) => void;
}

const FriendsFeedHeader = ({
  searchQuery,
  handleQuery
}: FriendsHeaderProps) => {
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
    <div className={`flex flex-row justify-between items-center py-8 px-3 md:px-6`}>
      <div className={`flex flex-row items-center md:flex-row text-lg text-slate-700 group`}>
        <div className='group-hover:text-primary-500'>
          {423}
        </div> 
        <FaUserFriends className='ml-2 group-hover:text-primary-500 duration-300' />
      </div>

      {/* Add Friend */}
      <div 
        className={`flex flex-row`}
      >
        <div 
          className={`flex flex-row items-center px-2 py-1 rounded-xl bg-transparent hover:bg-primary-500 hover:cursor-pointer border border-primary-500 group duration-300`}
          data-path={`/friends/add`}
          onClick={handleRoute}
        >
          <AiOutlinePlus className={`text-lg md:text-2xl text-primary-500 group-hover:text-white duration-300`} />

          {window.innerWidth > 768 && (
              <div className={`pl-1 text-primary-500 group-hover:text-white duration-300`}>
                Tambah
              </div>
          )}
        </div>

        <div className='px-1.5 md:px-3'></div>

        <div>
          {window.innerWidth > 768 ? (
              <Searchbar 
                placeholder='Cari nama atau email' 
                controlValue={searchQuery}
                controlCallback={(e) => {
                  handleQuery(e.target.value);
                }}
              />
            ) : (
              <Searchbar 
                mobile large 
                controlValue={searchQuery}
                controlCallback={(e) => {
                  handleQuery(e.target.value);
                }}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FriendsFeedHeader;