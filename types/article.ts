export type Articles = {
  cursor: string;
  total: number;
  first_row: number;
  last_row: number;
  articles: Article[];
};

export type Article = {
  id: string;
  category_id: string;
  title: string;
  thumbnail_url?: string;
  original_url: string;
  source: string;
  author?: string;
  is_published: boolean;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  teaser: string;
  category_name: string;
  row?: number;
};
