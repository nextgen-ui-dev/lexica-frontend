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

const AddFriendsHeader = ({
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

  // @Jere TODO recheck bisa apa nga
  // https://stackoverflow.com/questions/68452620/how-to-get-useeffect-to-only-update-on-changes-when-the-change-is-from-another-c
  // React.useEffect(() => {
  //   friends.setSearchQuery(searchQuery);
  // }, [searchQuery]);

  return (
    <div className={`flex flex-row justify-between items-center py-8 px-3 md:px-6`}>
      <div className={`flex flex-row items-center md:flex-row text-lg text-slate-700 group`}>
        {pathName === '/friends' && (
          <>
            <div className='group-hover:text-primary-500'>
              {423}
            </div> 
            <FaUserFriends className='ml-2 group-hover:text-primary-500 duration-300' />
          </>
        )}

        {pathName === '/friends/add' && (
          <div>
            Cari Teman!
          </div>
        )}
      </div>

      {/* Add Friend */}
      <div 
        className={`flex flex-row`}
        data-path={`/friends/add`}
        onClick={handleRoute}
      >
        {pathName === '/friends' && (
          <>
            <div className={`flex flex-row items-center px-2 py-1 rounded-xl bg-transparent hover:bg-primary-500 hover:cursor-pointer border border-primary-500 group duration-300`}>
              <AiOutlinePlus className={`text-lg md:text-2xl text-primary-500 group-hover:text-white duration-300`} />

              {window.innerWidth > 768 && (
                  <div className={`pl-1 text-primary-500 group-hover:text-white duration-300`}>
                    Tambah
                  </div>
              )}
            </div>
          </>
        )}

        <div className='px-1.5 md:px-3'></div>

        <div>
          {pathName === '/friends' && (
            <>
              {window.innerWidth > 768 ? (
                  <Searchbar 
                    placeholder='Cari nama atau email' 
                    controlValue={searchQuery}
                    controlCallback={(e) => {
                      handleQuery(e.target.value);
                      console.log(searchQuery); // TODO delete this
                    }}
                  />
                ) : (
                  <Searchbar 
                    mobile large 
                    controlValue={searchQuery}
                    controlCallback={(e) => {
                      handleQuery(e.target.value);
                      console.log(searchQuery); // TODO delete this
                    }}
                  />
                )
              }
            </>
          )}

          {pathName === '/friends/add' && (
            <>
              {window.innerWidth > 768 ? (
                <Searchbar 
                  large placeholder='Cari lewat email' 
                  controlValue={searchQuery}
                  controlCallback={(e) => {
                      handleQuery(e.target.value);
                      console.log(searchQuery); // TODO delete this
                    }}
                />
              ) : (
                <Searchbar 
                  mobile large 
                  controlValue={searchQuery}
                  controlCallback={(e) => {
                      handleQuery(e.target.value);
                      console.log(searchQuery); // TODO delete this
                    }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddFriendsHeader;