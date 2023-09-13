/* eslint-disable prettier/prettier */

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CollectionCard from "./CollectionCard";
import { Collection } from "@/types/collection";

interface CollectionProps {
  collections: Collection[] | undefined;
}

function helper() {
  if (typeof Node === "function" && Node.prototype) {
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function (child) {
      if (child.parentNode !== this) {
        if (console) {
          console.error(
            "Cannot remove a child from a different parent",
            child,
            this,
          );
        }
        return child;
      }
      return originalRemoveChild.apply(this, arguments);
    };

    const originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function (newNode, referenceNode) {
      if (referenceNode && referenceNode.parentNode !== this) {
        if (console) {
          console.error(
            "Cannot insert before a reference node from a different parent",
            referenceNode,
            this,
          );
        }
        return newNode;
      }
      return originalInsertBefore.apply(this, arguments);
    };
  }
}

const CollectionsFeed = ({ collections }: CollectionProps) => {
  const router = useRouter();

  helper();
  return (
    <div
      className={`
          flex flex-col py-[20px] 
          md:grid md:grid-cols-3 md:gap-8 md:py-[32px]`}
    >
      {collections &&
        collections.length > 0 &&
        collections
          .filter((_, idx) => idx < 100)
          .map((item, id) => {
            return (
              <CollectionCard
                key={id}
                collection={item}
                onClick={() => router.push(`/collections/${item.id}`)}
              />
            );
          })}
    </div>
  );
};

export default CollectionsFeed;
