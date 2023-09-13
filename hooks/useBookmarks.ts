/* eslint-disable prettier/prettier */
import { create } from "zustand";
import { Article } from "@/types/article";
import { ArticleDetail } from "@/types/articleDetail";

// interface BookmarkArticlesStore {
//   bookmarks: ArticleDetail[];
//   bookmarksRegular: Article[];
//   addBookmark: (article: ArticleDetail) => void;
//   addBookmarkRegular: (article: Article) => void;
//   removeBookmark: (id: string) => void;
//   removeBookmarkRegular: (id: string) => void;
//   isBookmarked: (id: string) => boolean;
// }

interface BookmarkArticlesStore {
  bookmarks: ArticleDetail[];
  addBookmark: (article: ArticleDetail) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const useBookmarks = create<BookmarkArticlesStore>((set) => ({
  bookmarks: [],
  addBookmark: (art: ArticleDetail) => {
    set((state) => {
      state.bookmarks.push(art);

      return {
        bookmarks: state.bookmarks,
      };
    });
  },
  removeBookmark: (id: string) => {
    set((state) => {
      if (state.bookmarks.filter((art) => art.id === id).length === 0) {
        return {
          bookmarks: state.bookmarks,
        };
      }

      // If found:
      const newBookmarks: ArticleDetail[] = state.bookmarks.filter(
        (art) => art.id !== id,
      );

      state.bookmarks = newBookmarks;

      return {
        bookmarks: state.bookmarks,
      };
    });
  },
  isBookmarked: (id: string) => {
    let res = false;

    set((state) => {
      if (state.bookmarks.length === 0) {
        res = false;

        return {
          bookmarks: state.bookmarks,
        };
      }

      // Check if article exists in bookmark
      if (res == false && state.bookmarks.filter((art) => {
        if (art.id === id) {
          console.log("isFound!");
          res = true;
        }
      }))

      // if (state.bookmarks.filter((art) => art.id === id).length === 0) {
      //   res = false;
      // }

      return {
        bookmarks: state.bookmarks,
      };
    });

    return res;
  },
}));

export default useBookmarks;
