import Image from "next/image";
import Container from "../core/layout/Container";

const HomeHero = () => {
    return (<div className="relative w-full h-[55vh] bg-primary-600">
        <div className="absolute top-24 left-0 right-0 grid place-items-center">
            <h1 className="text-white text-8xl">Lexica</h1>
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
        <div className="w-full absolute -bottom-8">
            <Container>
                <div className="w-full p-4 flex flex-col bg-white rounded-full shadow-sm">
                    <h5>Hello</h5>
                </div>
            </Container>
        </div>
    </div>);
}

export default HomeHero;