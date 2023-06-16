import { Articles } from "@/app/constants/article.constant";
import Image from "next/image";

const ArticlePreviewCard = () => {
    return (
        <div className="col-span-2 md:col-span-1 w-full h-full flex flex-row gap-4 p-4 bg-white group hover:bg-primary-600 transition duration-300 ease-out shadow-sm rounded-lg">
            <div className="w-full h-full flex flex-col md:flex-row gap-4">
                <div className="w-full h-full flex flex-row gap-4">
                    <div className="w-1/2 h-full flex flex-col items-start justify-evenly gap-4">
                        <div className="w-full flex flex-col gap-2">
                            <h6 className="line-clamp-1 group-hover:text-primary-300">12 Juni 2023, CNN</h6>
                            <h3 className="line-clamp-3 group-hover:text-white">{Articles[0].title}</h3>
                        </div>
                        <div className="w-full hidden md:flex flex-col items-center justify-center">
                            <p className="line-clamp-4 group-hover:text-slate-200">{Articles[0].content}</p>
                        </div>
                    </div>
                    <div className='relative w-1/2 h-[20vh] md:h-full rounded-md overflow-hidden'>
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
                    <p className="line-clamp-4 group-hover:text-slate-200">{Articles[0].content}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticlePreviewCard;