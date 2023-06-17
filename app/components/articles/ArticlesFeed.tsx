'use client';

import { Articles } from "@/app/constants/article.constant";
import Container from "../core/layout/Container";
import ArticleCard from "../core/molecules/ArticleCard";
import ArticlePreviewCard from "./ArticlePreviewCard";

const ArticlesFeed = () => {
    return (
        <Container expanded>
            <div className="w-full grid grid-cols-2 gap-4 my-12">
                {Articles.map((article, id) => (
                    <ArticlePreviewCard key={id} article={article} />
                ))}
            </div>
        </Container>
    );
}

export default ArticlesFeed;