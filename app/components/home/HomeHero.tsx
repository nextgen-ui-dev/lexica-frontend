import Image from "next/image";
import Container from "../core/layout/Container";
import { AiOutlineSearch } from 'react-icons/ai';

const HomeHero = () => {
    return (
        <div className="relative w-full h-[55vh] bg-primary-600">
            <div className="absolute bottom-[18dvh] md:bottom-[30dvh] left-0 right-0 grid place-items-center">
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
                        <div className="w-full flex items-center justify-center p-2 cursor-pointer">
                            <h5 className="text-black italic text-center">"Teman membaca kamu yang ada kapan saja dan di mana saja"</h5>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default HomeHero;