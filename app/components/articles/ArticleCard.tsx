import Image from "next/image";
import { ArticleType } from "@/app/types/article.type";

interface ArticleCardProps {
    article: ArticleType
}

const ArticleCard = ({
    article
}: ArticleCardProps) => {
    return (
        <div className="w-full h-full flex flex-row gap-4 p-8 bg-white hover:scale-105 transition duration-200 ease-in-out shadow-sm rounded-xl">
            <div className="w-full h-full flex flex-col md:flex-row gap-4">
                <div className="w-full h-full flex flex-row justify-center items-center gap-4">
                    <div className="w-2/3 h-full flex flex-col items-start justify-evenly gap-4">
                        <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 cursor-pointer">Berita</h5>
                        <div className="w-full h-full flex flex-col gap-2">
                            <h6 className="line-clamp-1">12 Juni 2023, CNN</h6>
                            <h3 className="line-clamp-2 max-w-xs">{article.title}</h3>
                        </div>
                        <div className="w-full h-full hidden md:flex flex-col items-center justify-center">
                            <p className="line-clamp-3 text-slate-600">{article.content}</p>
                        </div>
                    </div>
                    <div className='relative w-1/3 h-[12dvh] md:h-[20dvh] rounded-2xl overflow-hidden bg-primary-500'>
                        <Image
                            src='/images/no_image.png'
                            alt=""
                            fill
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'center'
                            }}
                        />
                    </div>
                </div>
                <div className="w-full h-full md:hidden flex flex-col items-center justify-center">
                    <p className="line-clamp-4 text-slate-600">{article.content}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;