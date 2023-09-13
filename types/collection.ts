import { Article } from "./article";

export type Collection = {
  id: string;
  creator_id: string;
  name: string;
  visibility: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  creator_name: string;
  number_of_articles: number;
  articles?: Article[];
};
