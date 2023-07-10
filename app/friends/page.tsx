'use client';

import React, { useCallback } from 'react';
import Container from '../components/core/layout/Container';

import FriendsFeedHeader from '../components/friends/FriendsFeedHeader';
import FriendRowItem from '../components/friends/FriendRowItem';
import { FriendsConstants } from '../constants/friends.constants';

const FriendsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(FriendsConstants);

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
  }, [searchQuery]);

  return (
    <>
      <div className={`relative w-full h-screen`}> {/* parent */}
        <div className={`h-[8dvh] md:h-[12dvh] flex flex-col gap-y-40 bg-primary-500`}>
        </div>

        <Container>
          <div className='w-full'>
            <FriendsFeedHeader
              searchQuery={searchQuery}
              handleQuery={handleQuery}
            />
            <div className='flex flex-col divide-y-2'> {/* scrollable feed */}
              {searchResults.map((friend, id) => {
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