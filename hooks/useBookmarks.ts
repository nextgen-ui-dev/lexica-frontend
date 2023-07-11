/* eslint-disable prettier/prettier */
import { create } from "zustand";
import { Article } from "@/types/article";
import { ArticleDetail } from "@/types/articleDetail";
import { ArticleDetails as ArticlesDetailDummy } from "@/constants/articleDetail.constant";
import { Articles as ArticlesConstant } from "@/constants/article.constant";

interface BookmarkArticlesStore {
  bookmarks: ArticleDetail[];
  bookmarksRegular: Article[];
  addBookmark: (article: ArticleDetail) => void;
  addBookmarkRegular: (article: Article) => void;
  removeBookmark: (id: string) => void;
  removeBookmarkRegular: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const useBookmarks = create<BookmarkArticlesStore>((set) => ({
  bookmarks: [ArticlesDetailDummy[0]],
  bookmarksRegular: [ArticlesConstant[0]],
  addBookmark: (article: ArticleDetail) => {
    set((state) => {
      if (state.bookmarks.filter((art) => art.id === article.id)) {
        return {
          bookmarks: state.bookmarks,
        };
      }
      
      const newBookmarks: ArticleDetail[] = [...state.bookmarks, article];

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        bookmarks: newBookmarks,
      };
    });
  },
  addBookmarkRegular: (article: Article) => {
    set((state) => {
      if (state.bookmarksRegular.filter((art) => art.id === article.id)) {
        return {
          bookmarksRegular: state.bookmarksRegular,
        };
      }

      const newBookmarks: Article[] = [...state.bookmarksRegular, article];

      localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

      return {
        bookmarksRegular: newBookmarks,
      };
    });
  },
  removeBookmark: (id: string) => {
    set((state) => {
      if (state.bookmarks.filter((art) => art.id === id).length === 0) {
        console.log("masuk sini if");
        return {
          bookmarks: state.bookmarks,
        };
      }

      console.log("masuk sini non if");

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
      if (state.bookmarksRegular.filter((art) => art.id === id).length === 0) {
        return {
          bookmarksRegular: state.bookmarksRegular,
        };
      }

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
    const bookmarks: ArticleDetail[] = JSON.parse(
      localStorage.getItem("lexicaBookmarks") || "[]",
    );

    const bookmarksRegular: Article[] = JSON.parse(
      localStorage.getItem("lexicaBookmarks") || "[]",
    );
    
    const result = bookmarks.find((art) => art.id === id) !== null ||
      bookmarksRegular.find((art) => art.id === id) !== null;

    console.log("isbookmarked: ", result);

    return result;
  },
}));

export default useBookmarks;
