export type Collection = {
  id: string;
  name: string;
  creator:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
  articles: string[];
  thumbnailUrl: string;
};
