"use client";

import Container from "../core/layout/Container";
import ArticleCard from "./ArticleCard";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import { Article } from "@/types/article";

interface ArticlesFeedProps {
  isFetching: boolean;
  articles?: Article[];
}

const ArticlesFeed = ({ isFetching, articles }: ArticlesFeedProps) => {
  return (
    <Container expanded>
      <div className="w-full flex flex-col gap-8 mb-12 mt-16 md:mb-8 md:mt-4">
        {isFetching && (
          <div>
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
          </div>
        )}
        {!isFetching &&
          articles?.length !== 0 &&
          articles!.map((article, id) => (
            <ArticleCard key={id} article={article} />
          ))}
        {!articles?.length && <div className="h-[20vh] w-full" />}
        <div className="w-3/5 md:w-full md:max-w-lg mx-auto mb-4 space-y-4" />
      </div>
    </Container>
  );
};

export default ArticlesFeed;
