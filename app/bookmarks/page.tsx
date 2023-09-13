"use client";

import React from "react";
import Container from "@/components/core/layout/Container";
import useBookmarks from "@/hooks/useBookmarks";
import Searchbar from "@/components/core/molecules/Searchbar";
import BookmarksFeed from "@/components/bookmarks/BookmarksFeed";
import { Article } from "@/types/article";
// import { ArticleDetail } from "@/types/articleDetail";
// import { Articles } from "@/constants/article.constant";

const BookmarksPage = () => {
  const bookmarksRegularState = useBookmarks((state) => state.bookmarksRegular);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<Article[]>(
    bookmarksRegularState,
  );

  const handleQuery = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearch = React.useCallback(() => {
    setSearchResults(
      bookmarksRegularState.filter((article) => {
        return (
          article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.source?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }),
    );
  }, [searchQuery, bookmarksRegularState]);

  React.useEffect(() => {
    handleSearch();
  }, [searchQuery, bookmarksRegularState, handleSearch]);

  return (
    <div className={`relative w-full min-h-[100dvh] bg-backdrop`}>
      <div className={`h-[14dvh] flex flex-col gap-y-40 bg-primary-600`}></div>
      <div className="w-full bg-primary-600">
        <div className="w-full bg-backdrop rounded-t-[2dvh] md:rounded-t-[6dvh]">
          <Container expanded>
            <div className="flex flex-row justify-between items-center py-[24px] md:py-[40px]">
              <h3 className="text-xl md:text-2xl">Bookmark Saya</h3>
              <div className="px-2 md:px-4"></div>
              {window.innerWidth > 768 ? (
                <Searchbar
                  placeholder="Cari judul/sumber"
                  controlValue={searchQuery}
                  controlCallback={(e) => {
                    handleQuery(e.target.value);
                  }}
                />
              ) : (
                <Searchbar
                  mobile
                  large
                  placeholder="Cari judul/sumber"
                  controlValue={searchQuery}
                  controlCallback={(e) => {
                    handleQuery(e.target.value);
                  }}
                />
              )}
            </div>
            {searchResults ? (
              <BookmarksFeed bookmarks={searchResults} />
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
