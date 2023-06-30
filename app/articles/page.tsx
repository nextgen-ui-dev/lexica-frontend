import React from "react";

import ArticlesHero from "../components/articles/ArticlesHero";
import ArticlesFeed from "../components/articles/ArticlesFeed";
import Button from "../components/core/molecules/Button";

const ArticlesPage = () => {
  return (
    <div className="relative w-full">
      <ArticlesHero />
      <ArticlesFeed />
    </div>
  );
};

export default ArticlesPage;