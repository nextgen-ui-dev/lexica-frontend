"use client";

import React from "react";
import Image from "next/image";
import Container from "../../components/core/layout/Container";

import FriendsFeedHeader from "../../components/friends/FriendsFeedHeader";
import FriendRowItem from "../../components/friends/FriendRowItem";

import useFriends from "@/hooks/OlduseFriends";
import { User } from "../../types/session";
// import { FriendsConstants } from "../../constants/friends.constants";

const FriendsPage = () => {
  const friends = useFriends();
  const friendsState = useFriends((state) => state.friends);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<User[]>(
    friends.friends,
  );
  const handleQuery = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearch = React.useCallback(() => {
    setSearchResults(
      friendsState.filter((friend) => {
        return friend.name?.toLowerCase().includes(searchQuery.toLowerCase());
      }),
    );
  }, [searchQuery, friendsState]);

  React.useEffect(() => {
    handleSearch();
  }, [handleSearch, friendsState]);

  return (
    <div>
      <div className={`relative w-full min-h-[100dvh] bg-white`}>
        {" "}
        {/* parent */}
        <div
          className={`relative h-[16dvh] md:h-[28dvh] flex flex-col  gap-y-40 bg-primary-600`}
        >
          <h1
            className={`absolute text-3xl md:text-6xl top-[60%] md:top-[50%] left-1/2 -translate-x-1/2 text-white`}
          >
            Daftar Teman
          </h1>
        </div>
        <div className="w-full h-full bg-primary-600">
          <div className="w-full bg-white rounded-t-[2dvh] md:rounded-t-[6dvh]">
            <Container expanded>
              <FriendsFeedHeader
                searchQuery={searchQuery}
                handleQuery={handleQuery}
              />
              <div className="relative flex flex-col ">
                {" "}
                {/* Friends Feed */}
                {searchResults.length == 0 && (
                  <div
                    className={`relative mx-auto w-[200px] h-[200px] md:h-[400px] md:w-[400px]`}
                  >
                    <Image
                      src="/images/friends_no_results.svg"
                      alt="Empty"
                      fill
                    />
                    <div className="w-[300px] md:w-[800px] text-center absolute top-[100%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-600 text-md md:text-lg">
                      Cari temanmu lewat email atau nama mereka!
                    </div>
                  </div>
                )}
                {searchResults.length > 0 &&
                  searchResults.map((friend, id) => {
                    return <FriendRowItem key={id} friend={friend} />;
                  })}
              </div>
            </Container>
          </div>
        </div>
        <div className="bg-white pb-[24px] md:pb-[36px]"></div>
      </div>
    </div>
  );
};

export default FriendsPage;
