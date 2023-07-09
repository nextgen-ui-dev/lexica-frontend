import React from 'react'
import Container from '../components/core/layout/Container';
import FriendsHeader from '../components/friends/FriendsHeader';
import FriendRowItem from '../components/friends/FriendRowItem';

type Props = {}

const FriendsPage = (props: Props) => {
  return (
    <div className={`relative w-full`}>
      <div className={`h-[8dvh] md:h-[12dvh] flex flex-col gap-y-40 bg-primary-500`}>
        {/* Hero */}
      </div>

      <Container>
        <div className=''>
          <FriendsHeader />
          
            {Array.from(Array(20)).map((i, k) => {
              return (
                <FriendRowItem key={k} />
              )
            })}
        </div>
      </Container>
    </div>
  );
};

export default FriendsPage;