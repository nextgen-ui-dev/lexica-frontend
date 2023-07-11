import { create } from "zustand";

interface BookmarkArticlesStore {
  articles: string[];
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const useBookmarks = create<BookmarkArticlesStore>((set) => ({
  articles: [],
  addBookmark: (id: string) => {
    set((state) => {
      const newBookmarks: string[] = [...state.articles, id];

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        articles: newBookmarks,
      };
    });
  },
  removeBookmark: (id: string) => {
    set((state) => {
      const newBookmarks: string[] = state.articles.filter(
        (artId) => artId !== id,
      );

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        articles: newBookmarks,
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
