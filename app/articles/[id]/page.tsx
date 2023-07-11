"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import ScrollToTop from "react-scroll-to-top";

import Container from "@/components/core/layout/Container";
import ArticleDetailMenu from "@/components/articles/ArticleDetailMenu";

import { useArticle } from "@/hooks/useArticle";
import ArticleContentSkeleton from "@/components/articles/ArticleContentSkeleton";
import { Texts } from "@/types/articleDetail";
import ToastProvider from "@/providers/ToastProvider";

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

  const strr = "LAMPUNG, KOMPAS.com -\n\nSorotan Pandawara Group dalam kontennya tentang sampah yang selalu viral tidak pernah dimaksudkan untuk 'mempermalukan' pemerintah setempat. TikTokers Pandawara yang digawangi Gilang Rahma, Rafly Pasya, Agung Permana, Rifki Sa'dulah, dan Muchamad Ikhsan mengatakan, kegiatan yang mereka inisiasikan bukan untuk tujuan viral. 'Pandawara tidak pernah menyinggung siapa pun, kita selalu ekspos dan menginformasikan ke warga Indonesia apa yang kita dapatkan, dan tidak kita lebih-lebihkan,' kata Gilang di sela kegiatan bersih Pantai Sukaraja, Bandar Lampung, Senin (10/7/2023). Soal viral atau tidak viral semua tergantung dari media sosial itu sendiri. 'Kita selalu menyampaikan kabar apa adanya,' jelas Gilang. Gilang mengatakan, tujuan kegiatan kegiatan ini adalah untuk mempersatukan dan memperkuat sinergitas masyarakat serta Pemerintah. 'Kami ingin membuat masyarakat tidak saling menyalahkan lagi soal sampah ini. Karena, memang sebetulnya dalam hakikatnya soal sampah ini adalah tugas dari semua manusia di dunia ini dan yang terpenti. Disinggung, dari mana mengetahui tumpukan sampah di Pantai Sukaraja sudah hampir berpuluh tahun, Gilang menjelaskan, informasi itu didapat dari Pandawara yang ada di seluruh Indonesia. 'Jadi, sampai saat ini kita mempunyai rekan-rekan di setiap kota. Dari Aceh sampai timur, mereka selalu memonitoring di setiap tempat dan kota, di Provinsi masing-masing. Pada akhirnya selalu ada laporan ke kita setiap saat, dan akhirnya kita datangi,' tegasnya. 'Seperti yang kita sampaikan dalam video sebelumnya, kita sebelum melihat kondisi pantai ini, sudah punya informasi terkait ini,' sambung Gilang. Sementara, untuk penyebutan mengapa Pantai Sukaraja ini diklaim sebagai pantai terkotor nomor 2 di Indonesia, Gilang berkata karena pantai terkotor nomor satu ada di Pandeglang dan sebelumnya sudah mereka bersihkan bersama warga. 'Untuk itu, kita juga mempunyai alasan mengapa melakukan kegiatan di sini dan menyebutkan bahwa Pantai Sukaraja ini nomor dua terkotor se-Indonesia dan nomor satunya itu yang di Pandeglang,' ungkap Gilang. Baca juga: Menengok Pantai Terkotor di Indonesia Usai Dibersihkan Pandawara Group Dia berharap, setelah pantai Sukaraja dibersihkan, pemerintah dan masyarakat dapat berkolaborasi menjaga kebersihan pantai. 'Kami berharap, ke depannya ada pemeliharaan lebih lanjut dari masyarakat dan pemerintah. Agar bisa berkolaborasi lagi membuat program yang bisa memberikan perubahan kondisi pantai ini,' tandasnya."

  return (
    <>
      <ScrollToTop
        smooth
        color={`#5152ff`}
        className={`flex justify-center items-center p-2 stroke-[6px]`}
      />
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
            <ArticleDetailMenu id={parseInt(params.id)} />
          </div>
        </div>
      </section>
      <section className="w-full min-h-[70dvh] bg-primary-600">
        <div className="w-full min-h-[70dvh] bg-white p-4 md:p-8 rounded-t-[6dvh] md:rounded-t-[8dvh]">
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
    </>
  );
};

export default ArticleDetails;

function getArticleByDifficulty(params: Texts, difficulty?: DIFFICULTY) {
  if (difficulty === DIFFICULTY.ADVANCE) {
    return params.ADVANCED;
  } else if (difficulty === DIFFICULTY.INTERMEDIATE) {
    return params.INTERMEDIATE;
  } else {
    return params.BEGINNER;
  }
}
