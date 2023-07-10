'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import Container from '../components/core/layout/Container';

import FriendsFeedHeader from '../components/friends/FriendsFeedHeader';
import FriendRowItem from '../components/friends/FriendRowItem';

import { User } from '../types/session.type';
import { FriendsConstants } from '../constants/friends.constants';

const FriendsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('sadfsdf');
  const [searchResults, setSearchResults] = React.useState<User[]>(FriendsConstants);

  const handleQuery = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearch = useCallback(() => {
    setSearchResults(FriendsConstants.filter((friend) => {
      return friend.name!.toLowerCase().includes(searchQuery.toLowerCase());
    }));

  }, [searchQuery]);

  React.useEffect(() => {
    handleSearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <>
      <div className={`relative w-full min-h-[100dvh] md:min-h-[75dvh]`}> {/* parent */}
        <div className={`h-[8dvh] md:h-[12dvh] flex flex-col gap-y-40 bg-primary-500`}>
        </div>

        <Container>
          <div className='w-full'>
            <FriendsFeedHeader
              searchQuery={searchQuery}
              handleQuery={handleQuery}
            />
            <div className='relative flex flex-col divide-y-2'> {/* scrollable feed */}
              {searchResults.length == 0 && (
                <div className={`relative mx-auto w-[200px] h-[200px] md:h-[400px] md:w-[400px]`}>
                  <Image
                    src='/images/friends_no_results.svg'
                    alt='Empty'
                    fill
                  />
                  <div className='w-[300px] md:w-[800px] text-center absolute top-[100%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-600 text-md md:text-lg'>
                    Cari temanmu lewat email atau nama mereka!
                  </div>
                </div>
              )}

              {searchResults.length > 0 && searchResults.map((friend, id) => {
                return (
                  <FriendRowItem key={id} friend={friend} />
                )
              })}
            </div>
          </div>
        </Container>

        <div className='mb-[24px] md:mb-[36px]'></div>
      </div>
    </>
  );
};

export default FriendsPage;