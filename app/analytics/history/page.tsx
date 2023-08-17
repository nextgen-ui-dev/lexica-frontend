"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LuVerified } from "react-icons/lu";
import Container from "@/components/core/layout/Container";
import ArticleCard from "@/components/articles/ArticleCard";
import { Article } from "@/types/article";
import { Articles } from "@/constants/article.constant";

interface AnalyticsHistoryProps {
  articles: Article[];
}

const AnalyticsHistory = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  articles,
}: AnalyticsHistoryProps) => {
  return (
    <section className="w-[100dvw] min-h-[75dvh]">
      <div className="w-full min-h-[10dvh] bg-primary-600" />
      <div className="min-h-[65dvh] w-full bg-white py-8">
        <Container>
          <div className="w-full min-h-[56dvh] flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center py-2 md:py-4 h-[10dvh] md:h-[15dvh]">
              <h1 className="font-semibold">Catatan bacaan kamu</h1>
              <div className="py-1"></div>
              <p className="text-lg md:text-xl">{3} articles read</p>
            </div>

            {Articles.map((article, key) => {
              return <ArticleCard key={key} article={article} noScale />;
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AnalyticsHistory;
