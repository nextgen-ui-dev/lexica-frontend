import React from "react";

import ArticleFeed from "./ArticleFeed";
import ArticleHero from "./ArticleHero";
import Container from "../components/core/layout/Container";

interface Props {

}

const ArticlePage = ({ }: Props) => {
  return (
    <div className="relative w-full">
      <ArticleHero />
      <ArticleFeed />
    </div>
  );
};

export default ArticlePage;