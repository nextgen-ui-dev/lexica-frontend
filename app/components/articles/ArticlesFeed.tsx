'use client';

import { Articles } from "@/app/constants/article.constant";
import Container from "../core/layout/Container";
import ArticleCard from "./ArticleCard";
import Button from "../core/molecules/Button";

const ArticlesFeed = () => {
    return (
        <Container expanded>
            <div className="w-full flex flex-col gap-8 mb-12 mt-16 md:mb-8 md:mt-4">
                {Articles.map((article, id) => (
                    <ArticleCard key={id} article={article} />
                ))}
                <div className="w-3/5 md:w-full md:max-w-lg mx-auto mt-4 space-y-4">
                    <h5 className="text-center">Menampilkan 8 dari 12 Artikel</h5>
                    <Button label="Muat Lebih Banyak" fullRounded onClick={() => { }} />
                </div>
            </div>
        </Container>
    );
}

export default ArticlesFeed;