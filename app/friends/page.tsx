import React from 'react'
import Container from '../components/core/layout/Container';
import FriendsHeader from '../components/friends/FriendsHeader';
import FriendRowItem from '../components/friends/FriendRowItem';
import { FriendsConstants } from '../constants/friends.constants';

type Props = {}

const FriendsPage = (props: Props) => {
  return (
    <div className={`relative w-full`}>
      <div className={`h-[8dvh] md:h-[12dvh] flex flex-col gap-y-40 bg-primary-500`}>
        {/* Hero */}
      </div>

      <Container>
        <div className='w-full'>
          <FriendsHeader />
          
          <div className='flex flex-col divide-y-2'>
            {FriendsConstants.map((friend, id) => {
              return (
                <FriendRowItem key={id} friend={friend} />
              )
            })}
          </div>
        </div>
      </Container>

      <div className='mb-[24px] md:mb-[36px]'></div>
    </div>
  );
};

export default FriendsPage;