"use client";

import React from "react";
import { useParams } from "next/navigation";
import ArticleCard from "@/components/articles/ArticleCard";
import Container from "@/components/core/layout/Container";
import { Articles } from "@/constants/article.constant";
import { useGetCollection } from "@/hooks/collections/useGetCollection";

const CollectionDetails = () => {
  const params = useParams();
  const id = params.id;
  const collection = useGetCollection(id);
  const data = collection.data;

  const articles = data?.articles ? data?.articles : null;

  console.log("\n===COLLECTION: ", id);
  console.log("ARTICLES:", articles);

  return (
    <div className={`relative w-full min-h-[100dvh] bg-backdrop`}>
      <div className={`h-[14dvh] flex flex-col gap-y-40 bg-primary-600`}></div>

      <Container maximum>
        <div
          className={`flex flex-col items-center text-slate-800  pt-[36px] md:pt-[48px] pb-[36px] md:pb-[48px] font-normal`}
        >
          <div className="font-semibold text-2xl md:text-3xl">{data?.name}</div>
          <div className="text-md md:text-xl">{data?.creatorName}</div>
        </div>

        {articles && articles.length === 0 && (
          <div>
            <div className="flex justify-center text-center text-slate-800 text-lg md:text-xl font-semibold">
              Belum ada artikel
            </div>
          </div>
        )}

        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 px-2 md:px-0">
          {articles && articles.length > 0 &&
            articles.map((article, id) => {
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
