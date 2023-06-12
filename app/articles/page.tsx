import React from "react";

import ArticleFeed from "./ArticleFeed";


interface Props {

}

const ArticleList = ({ }: Props) => {
  return (
    <div>
      <p>Article Page</p>
      <ArticleFeed />
    </div>
  );
};

export default ArticleList;