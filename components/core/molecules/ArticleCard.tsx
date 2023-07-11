"use client";

import React from "react";
import Image from "next/image";
import Test from "@/public/images/test.jpg";

interface ArticleCardProps {
  id: number;
  title: string;
  author: string;
  content: string;
  difficulty: string;
  source: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  hover?: boolean;
  imageSrc?: string;
}

const ArticleCard = ({ title, content, onClick }: ArticleCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`
      flex 
      flex-row
      justify-between
      items-center
      w-full
      h-[100px] md:h-[120px]
      pt-2 md:pt-4
      rounded-lg
      hover:bg-gray-100
      `}
    >
      <div className="flex flex-col w-3/4 text-sm md:text-md py-2 md:py-3">
        <h5 className="line-clamp-2 font-semibold">{title}</h5>
        <p className="line-clamp-3 text-justify text-xs md:text-sm">
          {content}
        </p>
      </div>
      <div className="w-[60px] md:w-[120px] h-[50px] md:h-[75px] overflow-hidden relative rounded-lg">
        <Image
          src={Test}
          alt=""
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default ArticleCard;
