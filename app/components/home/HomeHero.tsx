import Image from "next/image";
import Container from "../core/layout/Container";
import { AiOutlineSearch } from 'react-icons/ai';

const HomeHero = () => {
    return (<div className="relative w-full h-[55vh] bg-primary-600">
        <div className="absolute top-40 md:top-24 left-0 right-0 grid place-items-center">
            <h1 className="text-white animate-bounce text-8xl">Lexica</h1>
        </div>
        <div className="absolute w-full h-full">
            <Image
                src='/images/hero.png'
                alt=""
                fill
                style={{
                    objectFit: 'contain',
                    objectPosition: 'center bottom'
                }}
            />
        </div>
        <div className="w-full absolute -bottom-8 md:-bottom-6">
            <Container>
                <div className="w-full p-2 flex flex-row gap-x-2 items-center justify-center bg-white rounded-full shadow-sm">
                    <div className="w-full grid grid-cols-3 cursor-pointer">
                        <div className="flex items-center justify-center text-center w-full px-6">
                            <h5>Kategori</h5>
                        </div>
                        <div className="flex items-center justify-center text-center w-full px-6 border-x-[1px]">
                            <h5>Bahasa</h5>
                        </div>
                        <div className="flex items-center justify-center text-center w-full px-6 border-r-[1px]">
                            <h5>Lini masa</h5>
                        </div>
                    </div>
                    <div className="bg-primary-600 p-2 rounded-full cursor-pointer">
                        <AiOutlineSearch
                            size={20}
                            className="text-white"
                        />
                    </div>
                </div>
            </Container>
        </div>
    </div>);
}

export default HomeHero;