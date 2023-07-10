"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Collection } from "@/types/collection.type";
import { Articles } from "@/constants/article.constant";
import { Collections } from "@/constants/collections.constant";

interface CollectionDetailsProps {
  collection?: Collection;
}

const CollectionDetails = ({ collection }: CollectionDetailsProps) => {
  const params = useParams();
  const id = parseInt(params.id);
  const collectionDummy = Collections.filter((col) => col.id === id)[0];

  return (
    <div className={`relative w-full min-h-[100dvh] bg-backdrop`}>
      <div className={`h-[14dvh] flex flex-col gap-y-40 bg-primary-600`}></div>
      <div>
        {collectionDummy.name} by {collectionDummy.creator.name}
      </div>

      <div>
        {Articles.filter((article) => {
          return collectionDummy.articles.includes(article.id);
        }).map((article, id) => {
          return (
            <div key={id}>
              <h3 className="line-clamp-2 max-w-xs">{article.title}</h3>
              {/* <p className="line-clamp-4 text-slate-600">{article.content}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionDetails;
