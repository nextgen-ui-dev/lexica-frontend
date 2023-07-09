'use client';

import React, { MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { FaUserFriends } from 'react-icons/fa';
import { BsCollection, BsBarChart } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { signOut } from 'next-auth/react';
import { User } from '@/app/types/session.type';

interface ProfileDropdownProps {
  user?: User,
  toggleExpand: () => void
}

const ProfileDropdown = ({
  user,
  toggleExpand
}: ProfileDropdownProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleRoute = (e: MouseEvent<HTMLDivElement>) => {
    const targetPath = e.currentTarget.getAttribute('data-path');
    if (targetPath) {
      toggleExpand();
      router.push(targetPath);
    }
  };

  return (
    <>
      <div className={`
          absolute ${window.innerWidth > 768 ? 'top-[40px]' : 'top-[35px]'}
          right-0 flex flex-col 
          bg-gray-100 rounded border border-gray-500
          duration-300 transition ease-in-out
        `}
      >
        <div className={`px-2 md:px-3 pt-2`}>
          <div className='text-slate-800 font-semibold'>
            {user?.name}
          </div>
          <div className='text-slate-600'>
            {user?.email}
          </div>
        </div>

        <div className={`bg-gray-200 my-[6px]`}>
          <div 
            data-path='/friends'
            onClick={handleRoute}
            className={`flex flex-row 
            px-2 md:px-3 py-[3px] 
            hover:bg-gray-300 
            hover:cursor-pointer
            text-slate-700
            `}
          >
            <FaUserFriends className='mr-2' />
            Teman
          </div>
          <div 
            data-path='/collections'
            onClick={handleRoute}
            className={`flex flex-row 
            px-2 md:px-3 py-[3px] 
            hover:bg-gray-300 
            hover:cursor-pointer
            text-slate-700
            `}
          >
            <BsCollection className='mr-2' />
            Koleksi
          </div>
          <div 
            data-path='/analytics'
            onClick={handleRoute}
            className={`flex flex-row 
            px-2 md:px-3 py-[3px] 
            hover:bg-gray-300 
            hover:cursor-pointer
            text-slate-700
            `}
          >
            <BsBarChart className='mr-2' />
            Performaku
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
          <BiLogOut className='mr-2 mt-[2px] group-hover:text-red-500 duration-300' />
          <div className='group-hover:text-red-500 duration-300'>
            Keluar
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;