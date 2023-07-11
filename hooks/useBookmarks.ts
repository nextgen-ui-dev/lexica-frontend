import { create } from "zustand";
import { Article } from "@/types/article";
import { ArticleDetail } from "@/types/articleDetail";
import { ArticleDetails as ArticlesDetailDummy } from "@/constants/articleDetail.constant";
import { Articles as ArticlesConstant } from "@/constants/article.constant";

interface BookmarkArticlesStore {
  bookmarks: ArticleDetail[];
  bookmarksRegular: Article[];
  addBookmark: (article: ArticleDetail) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const useBookmarks = create<BookmarkArticlesStore>((set) => ({
  bookmarks: [ArticlesDetailDummy[0]],
  bookmarksRegular: [ArticlesConstant[0]],
  addBookmark: (article: ArticleDetail) => {
    set((state) => {
      const newBookmarks: ArticleDetail[] = [...state.bookmarks, article];

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        bookmarks: newBookmarks,
      };
    });
  },
  addBookmarkRegular: (article: Article) => {
    set((state) => {
      const newBookmarks: Article[] = [...state.bookmarksRegular, article];

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        bookmarksRegular: newBookmarks,
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
  removeBookmarkRegular: (id: string) => {
    set((state) => {
      const newBookmarks: Article[] = state.bookmarksRegular.filter(
        (art) => art.id !== id,
      );

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        bookmarksRegular: newBookmarks,
      };
    });
  },
  isBookmarked: (id: string) => {
    const bookmarks: string[] = JSON.parse(
      localStorage.getItem("lexicaBookmarks") || "[]",
    );

    const bookmarksRegular: string[] = JSON.parse(
      localStorage.getItem("lexicaBookmarks") || "[]",
    );

    return bookmarks.includes(id) || bookmarksRegular.includes(id);
  },
}));

export default useBookmarks;
