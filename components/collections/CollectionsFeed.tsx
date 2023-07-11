"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CollectionCard from "./CollectionCard";
import { Collection } from "@/types/collection";
import { Collections as DummyCollections } from "@/constants/collections.constant";

interface CollectionProps {
  collections: Collection[];
}

const CollectionsFeed = ({ collections }: CollectionProps) => {
  const router = useRouter();

  return (
    <div
      className={`
          flex flex-col py-[20px] 
          md:grid md:grid-cols-3 md:gap-8 md:py-[32px]`}
    >
      {collections.length > 0 &&
        collections
          .filter((item, idx) => idx < 100)
          .map((item, id) => {
            return (
              <div key={id} className="pt-[10px] md:pt-[0px]">
                <CollectionCard
                  collection={item}
                  onClick={() => router.push(`/collections/${item.id}`)}
                />
              </div>
            );
          })}
    </div>
  );
};

export default CollectionsFeed;
