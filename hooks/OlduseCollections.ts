import { create } from "zustand";

import { ArticleDetail } from "@/types/articleDetail";
import { OldCollection } from "@/types/collectionOld";
import { Collections as CollectionConstants } from "@/constants/collections.constant";

interface CollectionsStore {
  collections: OldCollection[];
  addCollection: (collection: OldCollection) => void;
  removeCollection: (collectionId: string) => void;
  isCollectionOwner: (collectionId: string, userEmail: string) => boolean;
  addArticleToCollection: (
    article: ArticleDetail,
    collectionName: string,
  ) => void;
  removeArticleFromCollection: (
    articleId: string,
    collectionName: string,
  ) => void;
}

const useCollections = create<CollectionsStore>((set) => ({
  collections: CollectionConstants,
  addCollection: (collection: OldCollection) => {
    set((state) => {
      if (state.collections.filter((col) => col.name === collection.name)) {
        return {
          collections: state.collections,
        };
      }

      const newCollections: OldCollection[] = [...state.collections, collection];
      localStorage.setItem("lexicaCollections", JSON.stringify(newCollections));

      return {
        collections: newCollections,
      };
    });
  },
  removeCollection: (collectionId: string) => {
    set((state) => {
      if (
        state.collections.filter((col) => col.id === collectionId).length === 0
      ) {
        return {
          collections: state.collections,
        };
      }

      const newCollections: OldCollection[] = state.collections.filter(
        (collection) => collection.id !== collectionId,
      );
      localStorage.setItem("lexicaCollections", JSON.stringify(newCollections));

      return {
        collections: newCollections,
      };
    });
  },
  isCollectionOwner: (collectionId: string, userEmail: string) => {
    return (
      CollectionConstants.find(
        (col) => col.id === collectionId && col.creator?.email === userEmail,
      ) !== undefined
    );
  },
  addArticleToCollection: (article: ArticleDetail, collectionName: string) => {
    set((state) => {
      let collection: OldCollection | undefined = state.collections.find(
        (col) => col.name === collectionName,
      );

      if (collection === undefined) {
        return {
          collections: state.collections,
        };
      }

      collection = {
        ...collection,
        articles: [...collection.articles, article.id],
      };

      return {
        collections: [...state.collections, collection],
      };
    });
  },
  removeArticleFromCollection: (articleId: string, collectionName: string) => {
    set((state) => {
      let collection: OldCollection | undefined = state.collections.find(
        (col) => col.name === collectionName,
      );

      if (collection === undefined) {
        return {
          collections: state.collections,
        };
      }

      collection = {
        ...collection,
        articles: collection.articles.filter(
          (article) => article !== articleId,
        ),
      };

      return {
        collections: [...state.collections, collection],
      };
    });
  },
}));

export default useCollections;
