import Image from "next/image";

const ArticleHeroNoData = () => {
    return (
        <div className="w-full h-[55dvh] md:h-[50dvh] bg-white rounded-3xl shadow-sm px-4 p-4 group hover:cursor-pointer hover:border hover:border-primary-500 duration-300">
            <div className="relative w-full h-full flex flex-col items-center justify-evenly md:flex-row rounded-2xl bg-primary-500">
                <div className="absolute bottom-[1dvh] md:bottom-[25dvh] left-0 right-0 grid place-items-center">
                    <h3 className="text-white animate-bounce text-8xl font-bold">
                        Kosong
                    </h3>
                </div>
                <div className="absolute w-full h-full">
                    <Image
                        src="/images/hero.png"
                        alt="no-image-state"
                        fill
                        priority
                        quality={100}
                        sizes="(max-width: 1720px) 100vw, (max-width: 1400pxpx) 50vw, 33vw"
                        style={{
                            objectFit: "contain",
                            objectPosition: "center bottom",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ArticleHeroNoData;
