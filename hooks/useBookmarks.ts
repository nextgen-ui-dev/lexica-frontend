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
      }
    })
  },
  removeBookmark: (id: string) => {
    set((state) => {
      if (state.bookmarks.filter((art) => art.id === id).length === 0) {
        return {
          bookmarks: state.bookmarks,
        };
      }

      // If found,
      const newBookmarks: ArticleDetail[] = state.bookmarks.filter(
        (art) => art.id !== id,
      );

      state.bookmarks = newBookmarks

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
        }
      }
      
      if (state.bookmarks.filter((art) => art.id === id).length === 0) {
        console.log("isFound!");
        res = false;
      }

      res = true;

      return {
        bookmarks: state.bookmarks,
      }
    })

    return res;
  }
}));

// @Jere TODO remove the "Regular" category as its not needed
// const useBookmarks = create<BookmarkArticlesStore>((set) => ({
//   bookmarks: [],
//   bookmarksRegular: [],
//   addBookmark: (article: ArticleDetail) => {
//     set((state) => {
//       if (
//         state.bookmarks.length > 0 &&
//         state.bookmarks.filter((art) => art.id === article.id)
//       ) {
//         return {
//           bookmarks: state.bookmarks,
//         };
//       }

//       const newBookmarks: ArticleDetail[] = [...state.bookmarks, article];

//       localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

//       console.log("addBookmark()");
//       console.log("newBookmarks:", newBookmarks);
//       return {
//         bookmarks: newBookmarks,
//       };
//     });

//   },
//   addBookmarkRegular: (article: Article) => {
//     set((state) => {
//       if (state.bookmarksRegular.filter((art) => art.id === article.id)) {
//         return {
//           bookmarksRegular: state.bookmarksRegular,
//         };
//       }

//       const newBookmarks: Article[] = [...state.bookmarksRegular, article];

//       localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

//       return {
//         bookmarksRegular: newBookmarks,
//       };
//     });
//   },
  // removeBookmark: (id: string) => {
  //   set((state) => {
  //     if (state.bookmarks.filter((art) => art.id === id).length === 0) {
  //       return {
  //         bookmarks: state.bookmarks,
  //       };
  //     }

  //     const newBookmarks: ArticleDetail[] = state.bookmarks.filter(
  //       (art) => art.id !== id,
  //     );

  //     localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

  //     return {
  //       bookmarks: newBookmarks,
  //     };
  //   });
  // },
//   removeBookmarkRegular: (id: string) => {
//     set((state) => {
//       if (state.bookmarksRegular.filter((art) => art.id === id).length === 0) {
//         return {
//           bookmarksRegular: state.bookmarksRegular,
//         };
//       }

//       const newBookmarks: Article[] = state.bookmarksRegular.filter(
//         (art) => art.id !== id,
//       );

//       localStorage.setItem("lexicaBookmarks", JSON.stringify(newBookmarks));

//       return {
//         bookmarksRegular: newBookmarks,
//       };
//     });
//   },
//   isBookmarked: (id: string) => {
//     const bookmarks: ArticleDetail[] = JSON.parse(
//       localStorage.getItem("lexicaBookmarks") || "[]",
//     );

//     const bookmarksRegular: Article[] = JSON.parse(
//       localStorage.getItem("lexicaBookmarks") || "[]",
//     );

//     console.log("\nisBookmarked");
//     console.log("bmrk", bookmarks);
//     console.log("bmrkReg", bookmarksRegular);

//     let result = false;
//     if (bookmarks.length > 0) {
//       result =
//         bookmarks.find((art) => art.id === id) !== null ||
//         bookmarksRegular.find((art) => art.id === id) !== null;
//     }

//     return result;
//   },
// }));

export default useBookmarks;
