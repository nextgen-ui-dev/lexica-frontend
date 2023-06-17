import Image from "next/image";
import Container from "../core/layout/Container";
import { Articles } from "@/app/constants/article.constant";

const ArticlesHero = () => {
    return (
        <div className="w-full">
            <div className="relative w-full h-[40vh] md:h-[45vh] flex flex-col gap-y-40 bg-primary-600">
                <div className="absolute w-full top-[24%] left-1/2 -translate-x-1/2">
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                        <h2 className="text-white">Lorem Ipsum</h2>
                        <p className="text-white">Lorem Ipsum Dor Si Tu Amet</p>
                    </div>
                </div>
                <div className="absolute w-full h-[50vh] md:h-[40vh] -bottom-[80%] md:-bottom-[45%]">
                    <Container>
                        <div className="w-full h-[45vh] md:h-[40vh] bg-white rounded-lg shadow-md p-4 group">
                            <div className="w-full h-full flex flex-col items-center justify-center md:flex-row">
                                <div className="w-full h-full max-h-44 md:max-h-min flex flex-row gap-4">
                                    <div className='relative w-1/2 h-full rounded-md overflow-hidden'>
                                        <Image
                                            src='/images/test.jpg'
                                            alt=""
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center bottom'
                                            }}
                                            className="group-hover:scale-105 transition"
                                        />
                                    </div>
                                    <div className="w-1/2 h-full flex flex-col items-start justify-center md:justify-evenly">
                                        <h4 className="text-primary-500 bg-gradient-to-r bg-clip-text text-transparent from-primary-500 via-primary-300 to-primary-500 animate-text duration-200 font-semibold">Terbaru</h4>
                                        <div className="pt-2 md:py-0">
                                            <div className="w-full flex flex-col">
                                                <h6 className="line-clamp-1">12 Juni 2023, CNN</h6>
                                                <h3 className="line-clamp-5 md:line-clamp-3">{Articles[0].title}</h3>
                                            </div>
                                            <div className="w-full hidden md:flex flex-col items-center justify-center">
                                                <p className="line-clamp-6 md:line-clamp-4">{Articles[0].content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-1/3 md:hidden flex flex-col items-center justify-center">
                                    <p className="line-clamp-4">{Articles[0].content}</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="w-full h-[25vh] md:h-[20vh]" />
        </div>
    );
}

export default ArticlesHero;