/* eslint-disable prettier/prettier */

"use client";

import React from "react";
import Container from "../../components/core/layout/Container";
import CollectionsFeed from "../../components/collections/CollectionsFeed";
import AddCollectionModal from "@/components/core/organism/modals/AddCollectionsModal";
import useCollectionsModal from "@/hooks/useCollectionsModal";
import { AiOutlinePlus } from "react-icons/ai";
import { useGetOwnCollections } from "@/hooks/collections/useGetOwnCollections";

const CollectionsPage = () => {
  const collectionsModal = useCollectionsModal();
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const handleQuery = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const { data } = useGetOwnCollections();

  return (
    <div className={`relative w-full min-h-[100dvh] bg-backdrop`}>
      <div className={`h-[16dvh] flex flex-col gap-y-40 bg-primary-600`}></div>
      <AddCollectionModal />
      <div className="w-full bg-primary-600">
        <div className="w-full bg-backdrop rounded-t-[2dvh] md:rounded-t-[6dvh]">
          <Container expanded>
            <div className="flex flex-row justify-between py-[12px] md:py-[24px] h-[10dvh]">
              <div
                className={`flex flex-row justify-start items-center w-[200px]`}
              >
                <div className="text-xl md:text-3xl text-slate-800 font-semibold mr-3 md:mr-8">
                  Koleksi Saya
                </div>
              </div>

              <div className={`flex flex-row items-center min-h-max`}>
                <div
                  className={`h-[40px] w-[60px] md:w-full flex justify-center flex-row items-center md:py-4 px-1 rounded-xl bg-transparent hover:bg-primary-500 hover:cursor-pointer border border-primary-500 group duration-300`}
                  onClick={collectionsModal.onOpen}
                >
                  <AiOutlinePlus
                    className={`text-lg md:text-2xl text-primary-500 group-hover:text-white duration-300`}
                  />

                  {window.innerWidth > 768 && (
                    <div
                      className={`pl-1 w-full text-primary-500 group-hover:text-white duration-300`}
                    >
                      Buat baru
                    </div>
                  )}
                </div>

                <div className="px-1 md:px-3"></div>
              </div>
            </div>
            {data ? <CollectionsFeed collections={data} /> : null}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
