'use client';

import React from 'react';

import { Articles } from '../constants/article.constant';

import ArticleCard from "../components/core/molecules/ArticleCard";


interface ArticleType {
  id: number,
  title: string,
  author: string,
  source: string,
  difficulty: string,
  content: string
}

type Props = {};


// const fetcher: (url: string) => Promise<Array<ArticleType>> = async (url: string) => {
//   return fetch(url).then((res) => res.json())
// };

const ArticleFeed = (props: Props) => {
  return (
    <div>
      { Articles.map(article => {
        return <ArticleCard 
                  id={article.id} 
                  title={article.title} 
                  author={article.author} 
                  content={article.content} 
                  difficulty={article.difficulty} 
                  source={article.source} 
                  onClick={() => console.log("To be updated!")}
                />
          })}
    </div>
  );
};

export default ArticleFeed;