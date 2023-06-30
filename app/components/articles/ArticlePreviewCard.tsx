'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArticleType } from "@/app/types/article.type";

interface ArticlePreviewCardProps {
    article: ArticleType
}

const ArticlePreviewCard = ({
    article
}: ArticlePreviewCardProps) => {
    const router = useRouter();

    const id = article.id;
    return (
        <div
            onClick={() => router.push(`/articles/${id}`)} 
            className="col-span-2 md:col-span-1 w-full h-full flex flex-row gap-4 p-4 
            bg-white group hover:bg-primary-600 
            hover:cursor-pointer
            transition duration-300 ease-out shadow-sm rounded-lg
        ">
            <div className="w-full h-full flex flex-col md:flex-row gap-4">
                <div className="w-full h-full flex flex-row gap-4">
                    <div className="w-2/3 h-full flex flex-col items-start justify-evenly gap-4">
                        <div className="w-full flex flex-col gap-2">
                            <h6 className="line-clamp-1 group-hover:text-primary-300">12 Juni 2023, CNN</h6>
                            <h3 className="line-clamp-3 md:line-clamp-2 group-hover:text-white">{article.title}</h3>
                        </div>
                        <div className="w-full hidden md:flex flex-col items-center justify-center">
                            <p className="line-clamp-3 group-hover:text-slate-200">{article.content}</p>
                        </div>
                    </div>
                    <div className='relative w-1/3 h-[10vh] md:h-full rounded-md overflow-hidden'>
                        <Image
                            src='/images/test.jpg'
                            alt=""
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center bottom'
                            }}
                            className="group-hover:scale-110 transition"
                        />
                    </div>
                </div>
                <div className="w-full h-full md:hidden flex flex-col items-center justify-center">
                    <p className="line-clamp-4 group-hover:text-slate-200">{article.content}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticlePreviewCard;