/* eslint-disable prettier/prettier */

"use client";

import React from "react";
import Container from "@/components/core/layout/Container";
import useBookmarks from "@/hooks/useBookmarks";
import Searchbar from "@/components/core/molecules/Searchbar";
import BookmarksFeed from "@/components/bookmarks/BookmarksFeed";
import { ArticleDetail } from "@/types/articleDetail";

const BookmarksPage = () => {
  const bookmarksState = useBookmarks((state) => state.bookmarks);

  console.log("bmrk", bookmarksState);
  return (
    <div className={`relative w-full min-h-[100dvh] bg-backdrop`}>
      <div className={`h-[14dvh] flex flex-col gap-y-40 bg-primary-600`}></div>
      <div className="w-full bg-primary-600">
        <div className="w-full bg-backdrop rounded-t-[2dvh] md:rounded-t-[6dvh]">
          <Container expanded>
            <div className="flex flex-row justify-between items-center py-[24px] md:py-[40px]">
              <h3 className="text-xl md:text-2xl">Bookmark Saya</h3>
              <div className="px-2 md:px-4"></div>
            </div>
            {bookmarksState ? (
              <BookmarksFeed bookmarks={bookmarksState} />
            ) : (
              <p className="flex flex-row justify-center items-center text-lg md:text-xl">
                Belum ada bookmark!
              </p>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BookmarksPage;
