"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Collection } from "@/types/collection.type";
import { Articles } from "@/constants/article.constant";
import { Collections } from "@/constants/collections.constant";
import ArticleCard from "@/components/articles/ArticleCard";
import Container from "@/components/core/layout/Container";

interface CollectionDetailsProps {
  collection?: Collection;
}

const CollectionDetails = ({ collection }: CollectionDetailsProps) => {
  const params = useParams();
  const id = parseInt(params.id);
  const collectionDummy = Collections.filter((col) => col.id === id)[0];

  return (
    <div className={`relative w-full min-h-[100dvh] bg-backdrop px-2 md:px-0`}>
      <div className={`h-[14dvh] flex flex-col gap-y-40 bg-primary-600`}></div>

      <Container maximum>
        <div>
          {collectionDummy.name} by {collectionDummy.creator.name}
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4">
          {Articles.filter((article) => {
            return collectionDummy.articles.includes(article.id);
          }).map((article, id) => {
            return (
              <div key={id} className={`py-2 md:py-0`}>
                <ArticleCard article={article} />
              </div>
            );
          })}
        </div>
      </Container>
      <div className="pb-[24px] md:pb-[36px]"></div>
    </div>
  );
};

export default CollectionDetails;
