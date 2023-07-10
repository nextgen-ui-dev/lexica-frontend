import { User } from "./session.type";

export type Collection = {
  id: number;
  name: string;
  creator: User;
  articles: number[];
  thumbnailUrl: string;
};
