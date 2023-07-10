import { Collection } from "../types/collection.type";

const imageUrl = "https://lh3.googleusercontent.com/a/AAcHTtesg_pgXYXWnBBXgkm8yefR9ib8UG8ZTJSrMwzDK4EBfQ=s346-c-no";

export const Collections: Collection[] = [
  {
    name: 'Teknologi Terkini',
    creator: {
      name: 'James Riady Susilo Wardhono',
      email: 'user@email.com',
      image: imageUrl
    },
    articles: [
      1,
      2,
      3,
      4,
    ],
    thumbnailUrl: '/images/no_image.png'
  },
  {
    name: 'Random',
    creator: {
      name: 'James Riady Susilo Wardhono',
      email: 'user@email.com',
      image: imageUrl
    },
    articles: [
      6, 
      8
    ],
    thumbnailUrl: '/images/no_image.png'
  }
];