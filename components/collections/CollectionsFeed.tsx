/* eslint-disable prettier/prettier */

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CollectionCard from "./CollectionCard";
import { Collection } from "@/types/collection";

interface CollectionProps {
  collections: Collection[] | undefined;
}

const CollectionsFeed = ({ collections }: CollectionProps) => {
  const router = useRouter();

  return (
    <div
      className={`
          flex flex-col py-[20px] 
          md:grid md:grid-cols-3 md:gap-8 md:py-[32px]`}
    >
      {collections &&
        collections.length > 0 &&
        collections
          .filter((_, idx) => idx < 100)
          .map((item, id) => {
            return (
              <CollectionCard
                key={id}
                collection={item}
                onClick={() => router.push(`/collections/${item.id}`)}
              />
            );
          })}
    </div>
  );
};

export default CollectionsFeed;
