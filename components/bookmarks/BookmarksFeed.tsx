import React from "react";
import { Article } from "@/types/articles";
import ArticleCard from "../articles/ArticleCard";

interface BookmarksFeedProps {
  bookmarks: Article[];
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
                <ArticleCard article={article} />
              </div>
            );
          })}
    </div>
  );
};

export default BookmarksFeed;
