"use client";

import React, { useEffect } from "react";

import ArticlesHero from "../../components/articles/ArticlesHero";
import ArticlesFeed from "../../components/articles/ArticlesFeed";
import Button from "../../components/core/molecules/Button";
import useBookmarkArticles from "../../hooks/useBookmarkArticles";

const ArticlesPage = () => {
  return (
    <div className="relative w-full bg-backdrop">
      <ArticlesHero />
      <ArticlesFeed />
    </div>
  );
};

export default ArticlesPage;
