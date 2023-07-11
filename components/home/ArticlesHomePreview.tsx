"use client";

import Image from "next/image";
import Container from "../core/layout/Container";
import { useThreeRecentArticle } from "@/hooks";
import RecentArticleCard from "./RecentArticleCard";

const ArticleHomePreviews = () => {
  const { data } = useThreeRecentArticle();
  return (
    <section className="w-full h-full bg-backdrop mt-12">
      <section className="w-full h-full bg-primary-600 rounded-t-[6dvh] py-12">
        <Container expanded>
          <div className="relative w-full h-full">
            <div className="flex flex-col justify-center items-center gap-12">
              <h2 className="text-white">Artikel terbaru</h2>
              <div className="w-full grid grid-cols-3 gap-4">
                {data
                  && data.articles.map(
                    (article) => <RecentArticleCard article={article} />
                  )
                }
              </div>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default ArticleHomePreviews;
