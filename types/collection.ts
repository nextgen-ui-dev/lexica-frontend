import { Article } from "./article";

export type Collection = {
  id: string;
  creatorId: string;
  name: string;
  visibility: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  creatorName: string;
  numberOfArticles: number;
  articles?: Article[];
};
