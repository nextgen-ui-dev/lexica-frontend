"use client";

import React from "react";
import CollectionCard from "./CollectionCard";
import { Collection } from "@/types/collection.type";
import { Collections as CollectionsConstant } from "@/constants/collections.constant";

const CollectionsFeed = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<Collection[]>([]);

  const handleQuery = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearch = React.useCallback(() => {
    setSearchResults(
      CollectionsConstant.filter((collection) => {
        return collection.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }),
    );
  }, [searchQuery]);

  React.useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div
      className={`
          flex flex-col py-[20px] 
          md:grid md:grid-cols-3 md:gap-8 md:py-[32px]`}
    >
      <div className="pt-[10px] md:pt-[0px]">
        <CollectionCard collection={CollectionsConstant[0]} />
      </div>

      <div className="pt-[10px] md:pt-[0px]">
        <CollectionCard collection={CollectionsConstant[0]} />
      </div>

      <div className="pt-[10px] md:pt-[0px]">
        <CollectionCard collection={CollectionsConstant[0]} />
      </div>

      <div className="pt-[10px] md:pt-[0px]">
        <CollectionCard collection={CollectionsConstant[1]} />
      </div>

      <div className="pt-[10px] md:pt-[0px]">
        <CollectionCard collection={CollectionsConstant[1]} />
      </div>
    </div>
  );
};

export default CollectionsFeed;
