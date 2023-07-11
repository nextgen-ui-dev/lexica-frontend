import { create } from "zustand";

import { Collection } from "@/types/collection";
import { Collections as CollectionConstants } from "@/constants/collections.constant";

interface CollectionsStore {
  collections: Collection[];
  addCollection: (collection: Collection) => void;
  removeCollection: (collectionId: number) => void;
  isCollectionOwner: (collectionId: number, userEmail: string) => boolean;
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
  removeCollection: (collectionId: number) => {
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
  isCollectionOwner: (collectionId: number, userEmail: string) => {
    return (
      Collections.filter((col) => col.id === collectionId)[0]?.creator.email ===
      userEmail
    );
  },
}));

export default useCollections;
