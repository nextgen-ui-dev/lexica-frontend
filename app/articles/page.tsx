import React from "react";

import ArticleFeed from "./ArticleFeed";
import ArticleHero from "./ArticleHero";
import Container from "../components/core/layout/Container";

interface Props {

}

const ArticlePage = ({ }: Props) => {
  return (
    <div className="relative w-full">
      <div className='py-6 flex justify-center items-center border border-gray-500'>
        Sample Navbar
      </div>
      <div className="pt-4 md:pt-12"></div>
      <Container>
        <ArticleHero />
        <ArticleFeed />
      </Container>
    </div>
  );
};

export default ArticlePage;