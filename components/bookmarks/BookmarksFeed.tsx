import React from "react";
import BookmarkCard from "./BookmarkCard";
import { ArticleDetail } from "@/types/articleDetail";

interface BookmarksFeedProps {
  bookmarks: ArticleDetail[];
}

const BookmarksFeed = ({ bookmarks }: BookmarksFeedProps) => {
  return (
    <div
      className={`
        flex flex-col py-[20px] 
        md:grid md:grid-cols-1 md:gap-8 md:py-[32px]`}
    >
      {bookmarks.length > 0 &&
        bookmarks
          .filter((_, idx) => idx < 100)
          .map((article, id) => {
            return (
              <div key={id} className={`py-2 md:py-0`}>
                <BookmarkCard article={article} />
              </div>
            );
          })}
    </div>
  );
};

export default BookmarksFeed;
