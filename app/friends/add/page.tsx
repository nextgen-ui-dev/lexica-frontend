'use client';

import React from 'react'
import Image from 'next/image'

import useFindFriends from '@/app/hooks/useFindFriends';
import FriendRowItem from '@/app/components/friends/FriendRowItem';

import { FriendsConstants } from '@/app/constants/friends.constants';

type Props = {}

const AddFriend = (props: Props) => {
  const friends = useFindFriends();
  const [searchResults, setSearchResults] = React.useState([]);
searchResults

  React.useEffect(() => {
    
  }, [friends.searchQuery]);
  if (searchResults.length === 0) {
    return (
      <div className={`w-full`}>
        <div className={`h-[8dvh] md:h-[12dvh] flex flex-col gap-y-40 bg-primary-500`}>
        </div>
        <div className='relative w-full h-[60dvh] md:h-[75dvh]'>
          <div className={`
            absolute top-1/3 left-1/2  -translate-y-1/2 -translate-x-1/2
            w-[240px] h-[240px] md:w-[400px] md:h-[400px]
          `}>
            <Image
              src='/images/friends_no_results.svg'
              alt='Empty'
              fill
            />
            <div className='w-[300px] md:w-[800px] text-center absolute top-[100%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-600 text-md md:text-lg'>
              Coba cari temanmu dengan email atau nama mereka!
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='flex flex-col divide-y-2'>
        {/* {FriendsConstants.filter((friend) => {
          // return 
        })} */}
        {FriendsConstants.map((friend, id) => {
          return (
            <FriendRowItem key={id} friend={friend} />
          )
        })}
      </div>
    </>
  );
}

export default AddFriend;