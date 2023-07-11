"use client";

import { Article } from "@/types/articles";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RecentArticleCardProps {
  article: Article;
}

const RecentArticleCard = ({ article }: RecentArticleCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/articles/${article.id}`)}
      className="relative cursor-pointer col-span-3 md:col-span-1 flex flex-col gap-2 w-full p-4 hover:-translate-y-4 transition duration-200 ease-in bg-white rounded-2xl"
    >
      <div className="relative w-full h-[20vh] md:h-[28vh] rounded-xl overflow-hidden">
        <Image
          src="/images/no_image.png"
          alt=""
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="group-hover:scale-110 transition bg-primary-500"
        />
      </div>
      <h4 className="line-clamp-2">{article.title}</h4>
      <p className="line-clamp-3">{article.teaser}</p>
    </div>
  );
};

export default RecentArticleCard;
