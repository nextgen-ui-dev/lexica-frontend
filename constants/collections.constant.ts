import { Collection } from "../types/collection";

const imageUrl =
  "https://lh3.googleusercontent.com/a/AAcHTtesg_pgXYXWnBBXgkm8yefR9ib8UG8ZTJSrMwzDK4EBfQ=s346-c-no";

export const Collections: Collection[] = [
  {
    id: 1,
    name: "Teknologi Terkini",
    creator: {
      name: "James Riady Susilo Wardhono",
      email: "user@email.com",
      image: imageUrl,
    },
    articles: [1, 2, 3, 4],
    thumbnailUrl: "/images/no_image.png",
  },
  {
    id: 2,
    name: "Random",
    creator: {
      name: "Jason Edbert",
      email: "user@email.com",
      image: imageUrl,
    },
    articles: [5, 6],
    thumbnailUrl: "/images/no_image.png",
  },
  {
    id: 3,
    name: "Teknologi Terkini",
    creator: {
      name: "James Riady Susilo Wardhono",
      email: "user@email.com",
      image: imageUrl,
    },
    articles: [1, 2, 3, 4],
    thumbnailUrl: "/images/no_image.png",
  },
  {
    id: 4,
    name: "Random",
    creator: {
      name: "Jason Edbert",
      email: "user@email.com",
      image: imageUrl,
    },
    articles: [5, 6],
    thumbnailUrl: "/images/no_image.png",
  },
  {
    id: 5,
    name: "Teknologi Terkini",
    creator: {
      name: "James Riady Susilo Wardhono",
      email: "user@email.com",
      image: imageUrl,
    },
    articles: [1, 2, 3, 4],
    thumbnailUrl: "/images/no_image.png",
  },
  {
    id: 6,
    name: "Random",
    creator: {
      name: "Jason Edbert",
      email: "user@email.com",
      image: imageUrl,
    },
    articles: [5, 6],
    thumbnailUrl: "/images/no_image.png",
  },
];
