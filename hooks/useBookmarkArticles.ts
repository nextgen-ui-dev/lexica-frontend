import { create } from "zustand";

import { ArticleType } from "../types/article";

interface BookmarkArticlesStore {
  articles: number[];
  addBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
}

const useBookmarkArticles = create<BookmarkArticlesStore>((set) => ({
  articles: [],
  addBookmark: (newArticleId: number) => {
    set((state) => {
      const newBookmarks: number[] = [...state.articles, newArticleId];

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        articles: newBookmarks,
      };
    });
  },
  removeBookmark: (id: number) => {
    set((state) => {
      const newBookmarks: number[] = state.articles.filter(
        (artId) => artId !== id,
      );

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        articles: newBookmarks,
      };
    });
  },
  isBookmarked: (id: number) => {
    const bookmarks: number[] = JSON.parse(
      localStorage.getItem("lexicaBookmarks") || "[]",
    );

    return bookmarks.includes(id);
  },
}));

export default useBookmarkArticles;
