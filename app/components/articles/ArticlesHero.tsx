import Image from "next/image";
import Container from "../core/layout/Container";
import { Articles } from "@/app/constants/article.constant";

const ArticlesHero = () => {
    return (
        <div className="w-full">
            <div className="relative w-full h-[50vh] flex flex-col gap-y-40 bg-primary-600">
                <div className="absolute w-full top-[28%] left-1/2 -translate-x-1/2">
                    <Container>
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <h2 className="text-white">Lorem Ipsum</h2>
                            <p className="text-white">Lorem Ipsum Dor Si Tu Amet</p>
                            <div className="max-w-2xl w-full p-4 bg-white rounded-full" />
                        </div>
                    </Container>
                </div>
                <div className="absolute w-full h-[50vh] md:h-[38vh] -bottom-[70%] md:-bottom-[50%]">
                    <Container>
                        <div className="w-full h-[34vh] md:h-[32vh] bg-white rounded-lg shadow-sm px-4 p-4 group">
                            <div className="w-full h-full flex flex-col items-center justify-evenly md:flex-row">
                                <div className="w-full h-full max-h-32 md:max-h-min flex flex-row gap-4">
                                    <div className='relative w-1/2 md:w-1/3 h-full rounded-md overflow-hidden'>
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
                                    <div className="w-2/3 h-full flex flex-col items-start justify-center md:justify-around">
                                        <h4 className="text-primary-500 bg-gradient-to-r bg-clip-text text-transparent from-primary-500 via-primary-300 to-primary-500 animate-text duration-200 font-semibold">Terbaru</h4>
                                        <div className="pt-2 md:py-0">
                                            <div className="w-full flex flex-col">
                                                <h6 className="line-clamp-1">12 Juni 2023, CNN</h6>
                                                <h3 className="line-clamp-3">{Articles[0].title}</h3>
                                            </div>
                                            <div className="w-full hidden md:flex flex-col items-center justify-center">
                                                <p className="line-clamp-6 md:line-clamp-4">{Articles[0].content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-1/3 md:hidden flex flex-col items-center justify-center pt-2">
                                    <p className="line-clamp-4">{Articles[0].content}</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="w-full h-[16vh] md:h-[20vh]" />
        </div>
    );
}

export default ArticlesHero;