"use client";

import Image from "next/image";
import Container from "../core/layout/Container";
import { Articles } from "@/constants/article.constant";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Article } from "@/types/article";
import moment from 'moment';
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import ArticleHeroCardSkeleton from "./ArticleHeroCardSkeleton";
import ArticleHeroCard from "./ArticleHeroCard";

interface ArticlesHeroProps {
  recentArticle?: Article
}

const ArticlesHero = ({
  recentArticle
}: ArticlesHeroProps) => {
  const router = useRouter();
  const article = Articles[0];
  return (
    <div className="w-full">
      <div className="relative w-full h-[52dvh] flex flex-col gap-y-40 bg-primary-600">
        <div className="absolute w-full top-1/2 -translate-y-1/2">
          <Container>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <h2 className="text-white">Cari bacaan favoritmu gratis!</h2>
              <div className="w-full max-w-xl bg-white flex justify-center items-center rounded-full pl-6 pr-2 py-2">
                <input
                  className="w-full border-none !outline-none"
                  placeholder="Temukan artikel apapun"
                />
                <AiOutlineSearch
                  size={32}
                  className="p-2 bg-primary-600 text-white rounded-full"
                />
              </div>
              <div className="w-full flex flex-row items-center justify-start md:justify-center gap-4 overflow-x-auto no-scrollbar">
                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">
                  Hiburan
                </h5>
                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">
                  Olahraga
                </h5>
                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">
                  Pendidikan
                </h5>
                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">
                  Bisnis
                </h5>
                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">
                  Teknologi
                </h5>
                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">
                  Politik
                </h5>
              </div>
            </div>
          </Container>
        </div>
        <div className="absolute w-full h-[50dvh] md:h-[40dvh] -bottom-[70%] md:-bottom-[55%]">
          <Container>
            {recentArticle
              ? <ArticleHeroCard article={recentArticle} />
              : <ArticleHeroCardSkeleton />
            }
          </Container>
        </div>
      </div>
      <div className="w-full h-[16dvh] md:h-[28dvh]" />
    </div>
  );
};

export default ArticlesHero;
