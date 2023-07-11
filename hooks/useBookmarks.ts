import { create } from "zustand";
import { Article } from "@/types/articles";
import { Articles as ArticlesDummy } from "@/constants/article.constant";

interface BookmarkArticlesStore {
  bookmarks: Article[];
  addBookmark: (article: Article) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const useBookmarks = create<BookmarkArticlesStore>((set) => ({
  bookmarks: ArticlesDummy,
  addBookmark: (article: Article) => {
    set((state) => {
      const newBookmarks: Article[] = [...state.bookmarks, article];

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        bookmarks: newBookmarks,
      };
    });
  },
  removeBookmark: (id: string) => {
    set((state) => {
      const newBookmarks: Article[] = state.bookmarks.filter(
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
