import { User } from "./session";

export type Collection = {
  id: number;
  name: string;
  creator: User;
  articles: number[];
  thumbnailUrl: string;
};
