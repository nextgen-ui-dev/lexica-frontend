import React from "react";

import ArticlesHero from "../components/articles/ArticlesHero";
import ArticlesFeed from "../components/articles/ArticlesFeed";

const ArticlesPage = () => {
  return (
    <div className="relative w-full">
      <ArticlesHero />
      <ArticlesFeed />
    </div>
  );
};

export default ArticlesPage;