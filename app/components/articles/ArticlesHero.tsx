import Image from "next/image";
import Container from "../core/layout/Container";
import { Articles } from "@/app/constants/article.constant";

const ArticlesHero = () => {
    return (
        <div className="w-full">
            <div className="relative w-full h-[40vh] flex flex-col gap-y-40 bg-primary-600">
                <div className="absolute w-full top-[20%] left-1/2 -translate-x-1/2">
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <h2 className="text-white">Lorem Ipsum</h2>
                        <p className="text-white">Lorem ipsum lorem ipsum</p>
                    </div>
                </div>
                <div className="absolute w-full h-[50vh] md:h-[40vh] -bottom-[70%] md:-bottom-[50%]">
                    <Container>
                        <div className="w-full h-[50vh] md:h-[40vh] bg-white rounded-lg shadow-md p-4 group">
                            <div className="w-full h-full flex flex-col md:flex-row">
                                <div className="w-full h-full flex flex-row gap-4">
                                    <div className='relative w-1/2 h-full rounded-md overflow-hidden'>
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
                                    <div className="w-1/2 h-full flex flex-col items-start justify-evenly">
                                        <h5>Terbaru</h5>
                                        <div className="w-full flex flex-col">
                                            <h6 className="line-clamp-1">12 Juni 2023, CNN</h6>
                                            <h3 className="line-clamp-4">{Articles[0].title}</h3>
                                        </div>
                                        <div className="w-full hidden md:flex flex-col items-center justify-center">
                                            <p className="line-clamp-6">{Articles[0].content}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full md:hidden flex flex-col items-center justify-center">
                                    <p className="line-clamp-6">{Articles[0].content}</p>
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