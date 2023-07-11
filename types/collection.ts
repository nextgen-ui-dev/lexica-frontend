import { User } from "./session";

export type Collection = {
  name: string;
  creator: User;
  articles: number[];
  thumbnailUrl: string;
};
