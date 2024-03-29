"use client";

import React from "react";
import Image from "next/image";

import AddFriendRowItem from "@/components/friends/AddFriendRowItem";
import Container from "@/components/core/layout/Container";
import AddFriendsHeader from "@/components/friends/AddFriendsHeader";

import { User } from "@/types/session";
import { UsersConstants as DummyUsers } from "@/constants/users.constants";

// import useFriends from "@/hooks/useFriends";

const AddFriend = () => {
  // const friends = useFriends();
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<User[]>([]);

  const handleQuery = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearch = React.useCallback(() => {
    setSearchResults(
      DummyUsers.filter((user) => {
        if (user === null || user === undefined) {
          return false;
        } else if (searchQuery === "") {
          return false;
        } else {
          return (
            user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
      }),
    );
  }, [searchQuery]);

  React.useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className={`relative w-full min-h-[100dvh] bg-white`}>
      <div
        className={`relative h-[16dvh] md:h-[28dvh] flex flex-col  gap-y-40 bg-primary-600`}
      >
        <h1
          className={`absolute top-[60%] left-1/2 -translate-x-1/2 text-white`}
        >
          Cari Teman Baru
        </h1>
      </div>

      <div className="w-full h-full bg-primary-600">
        <div className="w-full bg-white rounded-t-[2dvh] md:rounded-t-[6dvh]">
          <Container>
            <div className="w-full py-[24px] md:py-[40px]">
              <AddFriendsHeader
                searchQuery={searchQuery}
                handleQuery={handleQuery}
              />
              <div className="relative flex flex-col pt-4 pb-12 divide-y-2">
                {" "}
                {/* scrollable feed */}
                {searchResults.length == 0 && (
                  <div
                    className={`relative mx-auto w-[200px] h-[200px] md:h-[400px] md:w-[500px]`}
                  >
                    <Image
                      src="/images/friends_no_results.svg"
                      alt="Empty"
                      fill
                    />
                    <div className="w-[300px] md:w-[800px] text-center absolute top-[100%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-500 text-lg md:text-xl">
                      Cari temanmu lewat email atau nama mereka!
                    </div>
                  </div>
                )}
                {/* TODO add pagination */}
                {searchResults.length > 0 &&
                  searchResults
                    .filter((_, idx) => idx < 100)
                    .map((friend, id) => {
                      return <AddFriendRowItem key={id} friend={friend} />;
                    })}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AddFriend;
