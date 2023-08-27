import { create } from "zustand";

import { Collection } from "@/types/collection";
import { Collections as CollectionConstants } from "@/constants/collections.constant";

interface CollectionsStore {
  collections: Collection[];
  addCollection: (collection: Collection) => void;
  removeCollection: (collectionId: string) => void;
  isCollectionOwner: (collectionId: string, userEmail: string) => boolean;
}

const useCollections = create<CollectionsStore>((set) => ({
  collections: CollectionConstants,
  addCollection: (collection: Collection) => {
    set((state) => {
      const newCollections: Collection[] = [...state.collections, collection];
      localStorage.setItem("lexicaCollections", JSON.stringify(newCollections));

      return {
        collections: newCollections,
      };
    });
  },
  removeCollection: (collectionId: string) => {
    set((state) => {
      const newCollections: Collection[] = state.collections.filter(
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
}));

export default useCollections;
