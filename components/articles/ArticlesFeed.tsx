"use client";

import Container from "../core/layout/Container";
import ArticleCard from "./ArticleCard";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import { Article } from "@/types/article";

interface ArticlesFeedProps {
  articles?: Article[];
}

const ArticlesFeed = ({ articles }: ArticlesFeedProps) => {
  return (
    <Container expanded>
      <div className="w-full flex flex-col gap-8 mb-12 mt-16 md:mb-8 md:mt-4">
        {articles?.length ? (
          articles.map((article, id) => (
            <ArticleCard key={id} article={article} />
          ))
        ) : (
          <>
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
          </>
        )}
        <div className="w-3/5 md:w-full md:max-w-lg mx-auto mb-4 space-y-4" />
      </div>
    </Container>
  );
};

export default ArticlesFeed;
