import Image from "next/image";
import Container from "../components/core/layout/Container";
import { AiOutlineSearch } from "react-icons/ai";

const AboutPage = () => {
    return (
        <section className="relative">
            <div className="relative w-full h-[55vh] bg-primary-600">
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
            </div>
            <div className="relative h-[40vh]">
                <div className="w-full absolute -top-6">
                    <Container>
                        <div className="w-full h-[50vh] p-2 flex flex-col gap-x-2 items-center justify-center bg-white rounded-lg shadow-sm">
                            <h1>hello</h1>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;