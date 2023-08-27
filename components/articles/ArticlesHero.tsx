"use client";

import Container from "../core/layout/Container";
import { AiOutlineSearch } from "react-icons/ai";
import ArticleHeroCardSkeleton from "./ArticleHeroCardSkeleton";
import ArticleHeroCard from "./ArticleHeroCard";
import { Article } from "@/types/article";
import { Category } from "@/types/category";
import ArticleCategoryPill from "./ArticleCategoryPill";
import ArticleHeroNoData from "./ArticleHeroNoData";

interface ArticlesHeroProps {
  selectedCategoryId?: string;
  isFetching: boolean;
  recentArticle?: Article;
  categories?: {
    data: Category[] | undefined;
    isFetching: boolean;
  };
  onChangeCategory: (categoryId: string) => void;
  onChangeSearchQuery: (categoryId: string) => void;
}

const ArticlesHero = ({
  selectedCategoryId,
  isFetching,
  recentArticle,
  categories,
  onChangeCategory,
  onChangeSearchQuery
}: ArticlesHeroProps) => {
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
                  onChange={(e) => onChangeSearchQuery(e.target.value)}
                />
                <AiOutlineSearch
                  size={32}
                  className="p-2 bg-primary-600 text-white rounded-full"
                />
              </div>
              <div className="max-w-2xl w-full flex flex-row overflow-scroll no-scrollbar lg:flex-wrap items-center justify-start md:justify-center gap-4">
                {!isFetching && categories?.data && categories?.data.length ? (
                  categories.data.map((category, index) => (
                    <ArticleCategoryPill
                      isActive={selectedCategoryId === category.id}
                      key={index}
                      categoryId={category.id}
                      categoryName={category.name}
                      onChangeCategory={onChangeCategory}
                    />
                  ))
                ) : (
                  <div className="w-full animate-pulse flex flex-row justify-center items-center gap-4">
                    <div className="h-8 bg-primary-100 rounded-full w-full mb-4" />
                    <div className="h-8 bg-primary-100 rounded-full w-full mb-4" />
                    <div className="h-8 bg-primary-100 rounded-full w-full mb-4" />
                    <div className="h-8 bg-primary-100 rounded-full w-full mb-4" />
                    <div className="h-8 bg-primary-100 rounded-full w-full mb-4" />
                    <div className="h-8 bg-primary-100 rounded-full w-full mb-4" />
                    <div className="h-8 bg-primary-100 rounded-full w-full mb-4" />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
        <div className="absolute w-full h-[50dvh] md:h-[40dvh] -bottom-[70%] md:-bottom-[55%]">
          <Container>
            {isFetching && <ArticleHeroCardSkeleton />}
            {recentArticle && <ArticleHeroCard article={recentArticle} />}
            {!recentArticle && !isFetching && <ArticleHeroNoData />}
          </Container>
        </div>
      </div>
      <div className="w-full h-[16dvh] md:h-[28dvh]" />
    </div>
  );
};

export default ArticlesHero;
