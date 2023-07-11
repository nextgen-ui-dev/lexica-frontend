"use client";

import React from "react";
import Container from "../../components/core/layout/Container";
import Searchbar from "../../components/core/molecules/Searchbar";
import CollectionsFeed from "../../components/collections/CollectionsFeed";
import AddCollectionModal from "@/components/core/organism/modals/AddCollectionsModal";
import useCollectionsModal from "@/hooks/useCollectionsModal";

import { AiOutlinePlus } from "react-icons/ai";

import { Collection } from "@/types/collection.type";
import { Collections as DummyCollections } from "@/constants/collections.constant";
import useCollections from "@/hooks/useCollections";

const CollectionsPage = () => {
  const collectionsState = useCollections((state) => state.collections);
  const collectionsModal = useCollectionsModal();
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchResults, setSearchResults] =
    React.useState<Collection[]>(collectionsState);

  const handleQuery = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearch = React.useCallback(() => {
    setSearchResults(
      collectionsState.filter((collection) => {
        return collection.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }),
    );
  }, [searchQuery]);

  React.useEffect(() => {
    handleSearch();
  }, [searchQuery, collectionsState]);

  return (
    <div className={`relative w-full min-h-[100dvh] bg-backdrop`}>
      <div className={`h-[14dvh] flex flex-col gap-y-40 bg-primary-600`}></div>
      <AddCollectionModal />
      <div className="w-full bg-primary-600">
        <div className="w-full bg-backdrop rounded-t-[6dvh]">
          <Container expanded>
            <div className="flex flex-row justify-between pt-[24px] md:pt-[40px]">
              <div className={`flex flex-row items-center`}>
                <div className="text-xl md:text-3xl text-slate-800 font-semibold mr-3 md:mr-8">
                  Koleksi Saya
                </div>

                <div
                  className={`flex flex-row items-center px-2 py-1 rounded-xl bg-transparent hover:bg-primary-500 hover:cursor-pointer border border-primary-500 group duration-300`}
                  data-path={`/friends/add`}
                  onClick={collectionsModal.onOpen}
                >
                  <AiOutlinePlus
                    className={`text-lg md:text-2xl text-primary-500 group-hover:text-white duration-300`}
                  />

                  {window.innerWidth > 768 && (
                    <div
                      className={`pl-1 text-primary-500 group-hover:text-white duration-300`}
                    >
                      Tambah
                    </div>
                  )}
                </div>
              </div>

              {window.innerWidth > 768 ? (
                <Searchbar
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
            <CollectionsFeed collections={searchResults} />
          </Container>
        </div>
      </div>
      <div className="pb-[24px] md:pb-[36px]"></div>
    </div>
  );
};

export default CollectionsPage;
