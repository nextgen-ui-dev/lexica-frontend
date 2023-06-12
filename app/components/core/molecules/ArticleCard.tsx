'use client';

import React from 'react';
import Image from 'next/image';

interface ArticleCardProps {
  id: number,
  title: string,
  author: string,
  content: string,
  difficulty: string,
  source: string,
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
  hover?: boolean,
  imageSrc?: string
}

const ArticleCard = ({
  id,
  title,
  author,
  content,
  difficulty,
  source,
  onClick,
  hover,
  imageSrc
}: ArticleCardProps) => {
  return (
    <div onClick={onClick} className={`${hover ? 'bg-gray-500' : 'bg-gray-300'}`}>
      {title}
    </div>
  );
};

export default ArticleCard;