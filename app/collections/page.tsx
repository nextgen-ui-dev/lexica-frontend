"use client";

import React from "react";
import Container from "../../components/core/layout/Container";
import Searchbar from "../../components/core/molecules/Searchbar";
import CollectionsFeed from "../../components/collections/CollectionsFeed";

import { Collections as DummyCollections } from "../../constants/collections.constant";
import { Collection } from "../../types/collection.type";

interface CollectionProps {}

const Collections = ({}: CollectionProps) => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchResults, setSearchResults] =
    React.useState<Collection[]>(DummyCollections);

  const handleQuery = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearch = React.useCallback(() => {
    setSearchResults(
      DummyCollections.filter((collection) => {
        return collection
          .name!.toLowerCase()
          .includes(searchQuery.toLowerCase());
      }),
    );
  }, [searchQuery]);

  React.useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className={`relative w-full min-h-[100dvh] bg-backdrop`}>
      <div className={`h-[14dvh] flex flex-col gap-y-40 bg-primary-600`}></div>

      <div className="w-full bg-primary-600">
        <div className="w-full bg-backdrop rounded-t-[6dvh]">
          <Container expanded>
            <div className="flex flex-row justify-between pt-[24px] md:pt-[40px]">
              <div className="text-xl md:text-3xl text-slate-800 font-semibold">
                Koleksi
              </div>

              {window.innerWidth > 768 ? (
                <Searchbar
                  large
                  placeholder="Cari nama koleksi"
                  controlValue={searchQuery}
                  controlCallback={(e) => {
                    handleQuery(e.target.value);
                  }}
                />
              ) : (
                <Searchbar
                  mobile
                  large
                  placeholder="Cari nama koleksi"
                  controlValue={searchQuery}
                  controlCallback={(e) => {
                    handleQuery(e.target.value);
                  }}
                />
              )}
            </div>
            <CollectionsFeed />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Collections;
