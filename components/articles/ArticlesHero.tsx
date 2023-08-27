"use client";

import Container from "../core/layout/Container";
import { AiOutlineSearch } from "react-icons/ai";
import ArticleHeroCardSkeleton from "./ArticleHeroCardSkeleton";
import ArticleHeroCard from "./ArticleHeroCard";
import { Article } from "@/types/article";
import { Category } from "@/types/category";
import ArticleCategoryPill from "./ArticleCategoryPill";

interface ArticlesHeroProps {
  recentArticle?: Article;
  categories?: Category[];
  onChangeCategory: (categoryId: string) => void;
}

const ArticlesHero = ({
  recentArticle,
  categories,
  onChangeCategory,
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
                />
                <AiOutlineSearch
                  size={32}
                  className="p-2 bg-primary-600 text-white rounded-full"
                />
              </div>
              <div className="max-w-2xl w-full flex flex-row overflow-scroll no-scrollbar lg:flex-wrap items-center justify-start md:justify-center gap-4">
                {categories?.length ? (
                  categories.map((category, index) => (
                    <ArticleCategoryPill
                      key={index}
                      categoryId={category.id}
                      categoryName={category.name}
                      onChangeCategory={onChangeCategory}
                    />
                  ))
                ) : (
                  <div>Loading</div>
                )}
              </div>
            </div>
          </Container>
        </div>
        <div className="absolute w-full h-[50dvh] md:h-[40dvh] -bottom-[70%] md:-bottom-[55%]">
          <Container>
            {recentArticle ? (
              <ArticleHeroCard article={recentArticle} />
            ) : (
              <ArticleHeroCardSkeleton />
            )}
          </Container>
        </div>
      </div>
      <div className="w-full h-[16dvh] md:h-[28dvh]" />
    </div>
  );
};

export default ArticlesHero;
