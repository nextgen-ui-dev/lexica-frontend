"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { RiCustomerServiceLine } from "react-icons/ri";
import ScrollToTop from "react-scroll-to-top";
import Container from "@/components/core/layout/Container";
import ArticleDetailMenu from "@/components/articles/ArticleDetailMenu";
import { useArticle } from "@/hooks/useArticle";
import ArticleContentSkeleton from "@/components/articles/ArticleContentSkeleton";
import ToastProvider from "@/providers/ToastProvider";
import useAsisstantModal from "@/hooks/useAssistantModal";

enum DIFFICULTY {
  ADVANCE,
  INTERMEDIATE,
  BEGINNER,
}

const ArticleDetails = () => {
  const params = useParams();
  const { data } = useArticle(params.id);
  const [articleDifficulty, setArticleDifficulty] = useState(
    DIFFICULTY.ADVANCE,
  );
  const assistantModal = useAsisstantModal();
  return (
    <div className="w-full h-full relative">
      <ScrollToTop
        smooth
        color={`#5152ff`}
        className={`flex justify-center items-center p-2 stroke-[6px]`}
      />
      <div
        onClick={() => {
          assistantModal.onOpen();
        }}
        className="fixed bottom-[12dvh] right-10 z-10 p-3 bg-primary-400 shadow-lg rounded-full cursor-pointer"
      >
        <RiCustomerServiceLine size={20} className="text-white" />
      </div>
      <ToastProvider />
      <section className="w-full h-[32dvh] md:h-[40dvh] bg-primary-600 flex flex-row items-center justify-center md:pt-4">
        <div className="w-full max-w-md">
          <h2 className="px-4 pt-6 md:mt-8 text-md md:text-xl text-center text-white">
            {data ? (
              data.title
            ) : (
              <div className="w-full h-full animate-pulse flex flex-col items-center justify-center">
                <div className="h-2.5 bg-primary-100 rounded-full w-3/6 mb-4" />
                <div className="h-2.5 bg-primary-100 rounded-full w-5/6 mb-4" />
                <div className="h-2.5 bg-primary-100 rounded-full w-4/6 mb-4" />
              </div>
            )}
          </h2>
          <div className="mt-4 md:mt-6 md:mb-4">
            <ArticleDetailMenu id={params.id} />
          </div>
        </div>
      </section>
      <section className="w-full min-h-[70dvh] bg-primary-600">
        <div className="w-full min-h-[70dvh] bg-white p-4 md:p-8 rounded-t-[2dvh] md:rounded-t-[6dvh]">
          <Container>
            <div className="flex flex-col items-center w-full h-full pt-8 md:pt-12">
              <div className="relative rounded-xl overflow-hidden w-[300px] md:w-[600px] h-[200px] md:h-[400px] mt-2 md:mt-4 mb-6 md:mb-8">
                {data ? (
                  <Image
                    src="/images/no_image.png"
                    alt="Article image"
                    fill
                    priority
                    style={{
                      objectFit: "cover",
                    }}
                    className="bg-primary-500 hover:scale-110 transition duration-200 ease-in-out"
                  />
                ) : (
                  <div className="bg-primary-100 animate-pulse w-full h-full" />
                )}
              </div>
              {data && (
                <div className="w-full">
                  <h6 className="text-center mb-4">
                    {data.source}{" "}
                    {data.author ? `-- ${data.author}` : "-- Tidak diketahui"}
                  </h6>
                  <h5 className="text-center mb-4">
                    Pilih tingkatan literasi yang kamu minati
                  </h5>
                  <div className="w-full grid grid-cols-3 mb-6">
                    <div
                      onClick={() => setArticleDifficulty(DIFFICULTY.ADVANCE)}
                      className={`col-span-1 cursor-pointer flex items-center justify-center border-b-2 py-2 ${
                        articleDifficulty === DIFFICULTY.ADVANCE &&
                        "border-primary-600"
                      }`}
                    >
                      <h3
                        className={`${
                          articleDifficulty !== DIFFICULTY.ADVANCE &&
                          "text-slate-400"
                        }`}
                      >
                        Lanjutan
                      </h3>
                    </div>
                    <div
                      onClick={() =>
                        setArticleDifficulty(DIFFICULTY.INTERMEDIATE)
                      }
                      className={`col-span-1 cursor-pointer flex items-center justify-center border-b-2 py-2 ${
                        articleDifficulty === DIFFICULTY.INTERMEDIATE &&
                        "border-primary-600"
                      }`}
                    >
                      <h3
                        className={`${
                          articleDifficulty !== DIFFICULTY.INTERMEDIATE &&
                          "text-slate-400"
                        }`}
                      >
                        Menengah
                      </h3>
                    </div>
                    <div
                      onClick={() => setArticleDifficulty(DIFFICULTY.BEGINNER)}
                      className={`col-span-1 cursor-pointer flex items-center justify-center border-b-2 py-2 ${
                        articleDifficulty === DIFFICULTY.BEGINNER &&
                        "border-primary-600"
                      }`}
                    >
                      <h3
                        className={`${
                          articleDifficulty !== DIFFICULTY.BEGINNER &&
                          "text-slate-400"
                        }`}
                      >
                        Pemula
                      </h3>
                    </div>
                  </div>
                </div>
              )}
              <pre className="whitespace-pre-line w-full text-justify text-md md:text-lg text-gray-600 font-normal">
                {data ? (
                  <div className="min-h-[80dvh]">
                    {articleDifficulty === DIFFICULTY.ADVANCE
                      ? data.texts.ADVANCED.content
                      : articleDifficulty === DIFFICULTY.INTERMEDIATE
                      ? data.texts.INTERMEDIATE.content
                      : data.texts.BEGINNER.content}
                  </div>
                ) : (
                  <ArticleContentSkeleton />
                )}
              </pre>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetails;
