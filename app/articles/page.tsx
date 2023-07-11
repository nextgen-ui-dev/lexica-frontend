"use client";

import ArticlesHero from "../../components/articles/ArticlesHero";
import ArticlesFeed from "../../components/articles/ArticlesFeed";
import { useArticles } from "@/hooks";

const ArticlesPage = () => {
  const { data } = useArticles();
  
  return (
    <div className="relative w-full bg-backdrop">
      <ArticlesHero recentArticle={data?.articles[0]} />
      <ArticlesFeed articles={data?.articles.slice(1)}/>
    </div>
  );
};

export default ArticlesPage;
