import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[55dvh] bg-primary-600">
      <div className="absolute top-40 md:top-24 left-0 right-0 grid place-items-center"></div>
      <div className="absolute bottom-0 w-full h-[40vh]">
        <Image
          src="/images/about_hero.png"
          alt=""
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
    </section>
  );
};

export default AboutHero;
