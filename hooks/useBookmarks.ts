import { create } from "zustand";
import { ArticleDetail } from "@/types/articleDetail";
import { Articles as ArticlesDummy } from "@/constants/article.constant";

interface BookmarkArticlesStore {
  bookmarks: ArticleDetail[];
  addBookmark: (article: ArticleDetail) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const useBookmarks = create<BookmarkArticlesStore>((set) => ({
  bookmarks: [ArticlesDummy[0]],
  addBookmark: (article: ArticleDetail) => {
    set((state) => {
      const newBookmarks: ArticleDetail[] = [...state.bookmarks, article];

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        bookmarks: newBookmarks,
      };
    });
  },
  removeBookmark: (id: string) => {
    set((state) => {
      const newBookmarks: ArticleDetail[] = state.bookmarks.filter(
        (art) => art.id !== id,
      );

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        bookmarks: newBookmarks,
      };
    });
  },
  isBookmarked: (id: string) => {
    const bookmarks: string[] = JSON.parse(
      localStorage.getItem("lexicaBookmarks") || "[]",
    );

    return bookmarks.includes(id);
  },
}));

export default useBookmarks;
