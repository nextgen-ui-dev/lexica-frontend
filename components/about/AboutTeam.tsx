import Image from "next/image";
import Container from "../core/layout/Container";

const AboutTeam = () => {
  return (
    <section className="w-full h-full bg-primary-600">
      <section className="w-full h-full flex flex-col gap-8 bg-primary-600 border-none rounded-t-[6dvh] px-4 pt-8 pb-12 md:pb-16">
        <div className="w-full max-w-3xl mx-auto h-full">
          <Container>
            <section
              id="hero"
              className="w-full flex flex-col items-center gap-12"
            >
              <h1 className="text-center text-white w-4/5 md:w-3/5">
                Anggota dibalik layar
              </h1>
              <div className="w-full h-full grid grid-rows-1 md:grid-cols-3 gap-6">
                <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-[20dvh] h-[20dvh] rounded-full overflow-hidden">
                    <Image
                      src="/images/hero.png"
                      alt=""
                      fill
                      priority
                      quality={100}
                      sizes="(max-width: 1720px) 100vw, (max-width: 1400pxpx) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center bottom",
                      }}
                      className="group-hover:scale-110 transition bg-primary-300"
                    />
                  </div>
                  <div>
                    <h2 className="text-white text-center">Jeremy Alva</h2>
                    <h5 className="text-slate-300 text-center">
                      Universitas Indonesia
                    </h5>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-[20dvh] h-[20dvh] rounded-full overflow-hidden">
                    <Image
                      src="/images/hero.png"
                      alt=""
                      fill
                      priority
                      quality={100}
                      sizes="(max-width: 1720px) 100vw, (max-width: 1400pxpx) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center bottom",
                      }}
                      className="group-hover:scale-110 transition bg-primary-300"
                    />
                  </div>
                  <div>
                    <h2 className="text-white text-center">Angga Putra</h2>
                    <h5 className="text-slate-300 text-center">
                      Universitas Indonesia
                    </h5>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-[20dvh] h-[20dvh] rounded-full overflow-hidden">
                    <Image
                      src="/images/hero.png"
                      alt=""
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center bottom",
                      }}
                      className="group-hover:scale-110 transition bg-primary-300"
                    />
                  </div>
                  <div>
                    <h2 className="text-white text-center">
                      Nayyara Airlangga
                    </h2>
                    <h5 className="text-slate-300 text-center">
                      Universitas Indonesia
                    </h5>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </div>
      </section>
    </section>
  );
};

export default AboutTeam;
