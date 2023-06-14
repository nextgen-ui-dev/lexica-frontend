'use client';

import React from 'react';

import { Articles } from '../constants/article.constant';
import Container from '../components/core/layout/Container';

import ArticleCard from "../components/core/molecules/ArticleCard";
import ArticleHero from './ArticleHero';


interface ArticleType {
  id: number,
  title: string,
  author: string,
  source: string,
  difficulty: string,
  content: string
}

type Props = {};

const ArticleFeed = (props: Props) => {
  return (
    <Container expanded>
      <div className='w-full flex flex-col my-12 mx-auto'>
        <div className='divide-y'>
          {Articles.map(article => {
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
      </div>
    </Container>
  );
};

export default ArticleFeed;