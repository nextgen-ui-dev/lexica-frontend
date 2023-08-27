"use client";

import ArticlesHero from "../../components/articles/ArticlesHero";
import ArticlesFeed from "../../components/articles/ArticlesFeed";
import { useArticles } from "@/hooks";
import { useCategories } from "@/hooks/useCategories";
import { useCallback, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

const ArticlesPage = () => {
  const { data, refetch } = useArticles();
  const categories = useCategories();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const debounce = useDebounce(selectedCategoryId, 2000);

  const onChangeCategory = useCallback(
    (categoryId: string) => {
      setSelectedCategoryId(categoryId);
    },
    [setSelectedCategoryId],
  );

  return (
    <div className="relative w-full bg-backdrop">
      <ArticlesHero
        recentArticle={data?.articles[0]}
        categories={categories.data}
        onChangeCategory={onChangeCategory}
      />
      <ArticlesFeed articles={data?.articles.slice(1)} />
    </div>
  );
};

export default ArticlesPage;
