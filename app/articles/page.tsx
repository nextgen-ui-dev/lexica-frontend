"use client";

import ArticlesHero from "../../components/articles/ArticlesHero";
import ArticlesFeed from "../../components/articles/ArticlesFeed";
import { useArticles } from "@/hooks";
import { useCategories } from "@/hooks/useCategories";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

const ArticlesPage = () => {
  const categories = useCategories();

  const [searchQuery, setSearchQuery] = useState<string>();
  const debouceSearchQuery = useDebounce(searchQuery, 1000);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const debouncedCategoryId = useDebounce(selectedCategoryId, 1000);

  const onChangeCategory = useCallback(
    (categoryId: string) => {
      setSelectedCategoryId(categoryId);
    },
    [setSelectedCategoryId],
  );

  const onChangeSearchQuery = useCallback(
    (searchQuery: string) => {
      setSearchQuery(searchQuery);
    },
    [setSearchQuery],
  );

  const { data, isFetching, refetch } = useArticles(
    debouceSearchQuery,
    debouncedCategoryId,
  );

  useEffect(() => {
    refetch();
  }, [debouceSearchQuery, debouncedCategoryId, refetch]);

  return (
    <div className="relative w-full bg-backdrop">
      <ArticlesHero
        selectedCategoryId={selectedCategoryId}
        isFetching={isFetching}
        recentArticle={data?.articles[0]}
        categories={categories}
        onChangeCategory={onChangeCategory}
        onChangeSearchQuery={onChangeSearchQuery}
      />
      <ArticlesFeed
        isFetching={isFetching}
        articles={data?.articles.slice(1)}
      />
    </div>
  );
};

export default ArticlesPage;
