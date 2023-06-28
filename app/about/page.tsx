import Image from "next/image";
import Container from "../components/core/layout/Container";

const AboutPage = () => {
    return (
        <>
            <section className="relative bg-primary-600">
                <section className="relative w-full h-[55dvh] bg-primary-600">
                    <div className="absolute top-40 md:top-24 left-0 right-0 grid place-items-center">
                        {/* <h1 className="text-white animate-bounce text-8xl">Lexica</h1> */}
                    </div>
                    <div className="absolute bottom-0 w-full h-[40vh]">
                        <Image
                            src='/images/about_hero.png'
                            alt=""
                            fill
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'center bottom'
                            }}
                        />
                    </div>
                </section>
                <section className="w-full h-screen bg-white rounded-t-[6dvh] px-4 py-8">
                    <Container>
                        <section id="hero" className="flex flex-col items-center gap-4 md:gap-6">
                            <h1 className="text-center w-4/5 md:w-3/5">Solusi dari permasalahan literasi Indoensia</h1>
                            <pre className="whitespace-pre-wrap text-justify">
                                Lexica merupakan aplikasi web GRATIS yang bertujuan untuk meningkatkan kemampuan literasi seluruh pelajar Indonesia serta menjadikan aktivitas membaca sebagai kegiatan yang menyenangkan.
                                Kami melakukan ini lewat penyediaan artikel berkualitas dan menarik dengan tingkat kesulitan bacaan yang dapat disesuaikan. Dengan ini, pembaca dapat membaca dan mendapat ilmu baru dengan memilih tingkat kesulitan teks yang sesuai dengan kemampuan mereka.
                                Lexica dapat diakses dari mana saja, lewat perangkat apa saja, dan dengan kondisi internet apa saja. Kami bermaksud untuk membuka pintu literasi kepada seluruh pelajar Indonesia, demi kemajuan pendidikan bangsa.
                            </pre>
                        </section>
                    </Container>
                </section>
            </section>
        </>
    );
}

export default AboutPage;