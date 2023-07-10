'use client';

import Image from "next/image";
import Container from "../core/layout/Container";
import { Articles } from "@/constants/article.constant";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from 'next/navigation';

const ArticlesHero = () => {
    const router = useRouter();
    const article = Articles[0];
    return (
        <div className="w-full">
            <div className="relative w-full h-[52dvh] flex flex-col gap-y-40 bg-primary-600">
                <div className="absolute w-full top-1/2 -translate-y-1/2">
                    <Container>
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <h2 className="text-white">Cari bacaan favoritmu gratis!</h2>
                            <div className="w-full max-w-xl bg-white flex justify-center items-center rounded-full pl-6 pr-2 py-2">
                                <input className="w-full border-none !outline-none" placeholder="Temukan artikel apapun" />
                                <AiOutlineSearch
                                    size={32}
                                    className="p-2 bg-primary-600 text-white rounded-full"
                                />
                            </div>
                            <div className="w-full flex flex-row items-center justify-start md:justify-center gap-4 overflow-x-auto no-scrollbar">
                                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">Hiburan</h5>
                                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">Olahraga</h5>
                                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">Pendidikan</h5>
                                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">Bisnis</h5>
                                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">Teknologi</h5>
                                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer">Politik</h5>
                            </div>
                        </div>
                    </Container>
                </div>
                <div
                    onClick={() => router.push(`/articles/${article.id}`)}
                    className="absolute w-full h-[50dvh] md:h-[40dvh] -bottom-[70%] md:-bottom-[55%]">
                    <Container>
                        <div className="w-full h-[34dvh] md:h-[35dvh] bg-white rounded-3xl shadow-sm px-4 p-4 group hover:cursor-pointer hover:border hover:border-primary-500 duration-300">
                            <div className="w-full h-full flex flex-col items-center justify-evenly md:flex-row">
                                <div className="w-full h-full max-h-32 md:max-h-min flex flex-row gap-4">
                                    <div className='relative w-1/2 md:w-1/3 h-full rounded-2xl overflow-hidden'>
                                        <Image
                                            src='/images/no_image.png'
                                            alt=""
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center bottom'
                                            }}
                                            className="group-hover:scale-105 transition bg-primary-500"
                                        />
                                    </div>
                                    <div className="w-2/3 h-full flex flex-col items-start justify-evenly md:justify-around">
                                        <div className="flex flex-col justify-evenly gap-2">
                                            <div className="flex flex-row items-center gap-x-4">
                                                <h4 className="text-primary-500 bg-gradient-to-r bg-clip-text text-transparent from-primary-500 via-primary-300 to-primary-500 animate-text duration-200 font-semibold">Terbaru</h4>
                                                <h5 className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 cursor-pointer">Berita</h5>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <h6 className="line-clamp-1">12 Juni 2023, CNN</h6>
                                                <h3 className="line-clamp-2 max-w-xs">{Articles[0].title}</h3>
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
            <div className="w-full h-[16dvh] md:h-[28dvh]" />
        </div>
    );
}

export default ArticlesHero;