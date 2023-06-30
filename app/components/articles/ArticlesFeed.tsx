'use client';

import { Articles } from "@/app/constants/article.constant";
import Container from "../core/layout/Container";
import ArticleCard from "./ArticleCard";

const ArticlesFeed = () => {
    return (
        <Container expanded>
            <div className="w-full flex flex-col gap-8 mt-8 mb-12">
                {Articles.map((article, id) => (
                    <ArticleCard key={id} article={article} />
                ))}
            </div>
        </Container>
    );
}

export default ArticlesFeed;