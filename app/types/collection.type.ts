import { User } from "./session.type"

export type Collection = {
  name: string,
  creator: User,
  articles: number[]
  thumbnailUrl: string
}