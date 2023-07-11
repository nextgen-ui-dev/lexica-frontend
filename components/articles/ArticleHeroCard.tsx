"use client";

import { Article } from "@/types/article";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ArticleHeroCardProps {
    article: Article
}

const ArticleHeroCard = ({ article }: ArticleHeroCardProps) => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/articles/${article.id}`)}
            className="w-full h-[34dvh] md:h-[35dvh] bg-white rounded-3xl shadow-sm px-4 p-4 group hover:cursor-pointer hover:border hover:border-primary-500 duration-300">
            <div className="w-full h-full flex flex-col items-center justify-evenly md:flex-row">
                <div className="w-full h-full max-h-32 md:max-h-min flex flex-row gap-4">
                    <div className="relative w-1/2 md:w-1/3 h-full rounded-2xl overflow-hidden">
                        <Image
                            src="/images/no_image.png"
                            alt=""
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "center bottom",
                            }}
                            className="group-hover:scale-105 transition bg-primary-500"
                        />
                    </div>
                    <div className="w-2/3 h-full flex flex-col items-start justify-evenly md:justify-around">
                        <div className="flex flex-col justify-evenly gap-2">
                            <div className="flex flex-row items-center gap-x-4">
                                <h4 className="text-primary-500 bg-gradient-to-r bg-clip-text text-transparent from-primary-500 via-primary-300 to-primary-500 animate-text duration-200 font-semibold">
                                    Terbaru
                                </h4>
                                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 cursor-pointer">
                                    {article.category_name}
                                </h5>
                            </div>
                            <div className="w-full flex flex-col">
                                <h6 className="line-clamp-1">{moment(article.created_at).format('DD MMM YYYY')}, {article.source}</h6>
                                <h3 className="line-clamp-2 max-w-xs">
                                    {article.title}
                                </h3>
                            </div>
                            <div className="w-full hidden md:flex flex-col items-center justify-center">
                                <p className="line-clamp-6 md:line-clamp-4">
                                    {article.teaser}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-1/3 md:hidden flex flex-col items-center justify-center pt-2">
                    <p className="line-clamp-4">{article.teaser}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticleHeroCard;