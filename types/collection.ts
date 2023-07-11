import { User } from "./session";

export type Collection = {
  id: string;
  name: string;
  creator: User;
  articles: string[];
  thumbnailUrl: string;
};
