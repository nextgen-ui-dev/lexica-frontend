export type ArticleDetail = {
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
  category_name?: string;
  texts: Texts;
  name?: string;
  founded?: number;
  members?: string[];
};

export type Texts = {
  ADVANCED: DifficultyType;
  BEGINNER: DifficultyType;
  INTERMEDIATE: DifficultyType;
};

export type DifficultyType = {
  id: string;
  article_id: string;
  content: string;
  difficulty: string;
  is_adapted?: boolean;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
};
