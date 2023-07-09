'use client';

import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import Searchbar from '../core/molecules/Searchbar';

type Props = {}

const FriendsHeader = (props: Props) => {
  return (
    <div className={`flex flex-row justify-between items-center py-8 px-3 md:px-6`}>
      <div className={`flex flex-col items-center md:flex-row text-lg text-slate-700 group`}>
        <div className='group-hover:text-primary-500'>
          {423}
        </div> 
        <FaUserFriends className='md:ml-2  group-hover:text-primary-500 duration-300' />
      </div>

      <div className={`flex flex-row`}>
        <div className={`flex flex-row items-center px-2 py-1 rounded-xl bg-transparent hover:bg-primary-500 hover:cursor-pointer border border-primary-500 group duration-300`}>
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
              <Searchbar placeholder='Cari nama atau email' />
            ) : (
              <Searchbar mobile large />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FriendsHeader;