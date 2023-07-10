import Container from '../core/layout/Container';

const AboutLexica = () => {
  return (
    <section className="w-full h-full bg-primary-600">
      <section className="w-full h-full flex flex-col gap-8 bg-white rounded-t-[6dvh] px-4 py-12 md:py-16">
        <Container>
          <section id="hero" className="flex flex-col items-center gap-4">
            <h1 className="text-center w-4/5 md:w-3/5">
              Solusi dari permasalahan literasi Indonesia
            </h1>
            <div className="md:hidden w-full h-[0.25px] bg-slate-400" />
            <pre className="whitespace-pre-wrap text-center text-sm md:text-base">
              Lexica merupakan aplikasi web GRATIS yang bertujuan untuk
              meningkatkan kemampuan literasi seluruh pelajar Indonesia serta
              menjadikan aktivitas membaca sebagai kegiatan yang menyenangkan.
              Kami melakukan ini lewat penyediaan artikel berkualitas dan
              menarik dengan tingkat kesulitan bacaan yang dapat disesuaikan.
              Dengan ini, pembaca dapat membaca dan mendapat ilmu baru dengan
              memilih tingkat kesulitan teks yang sesuai dengan kemampuan
              mereka. Lexica dapat diakses dari mana saja, lewat perangkat apa
              saja, dan dengan kondisi internet apa saja. Kami bermaksud untuk
              membuka pintu literasi kepada seluruh pelajar Indonesia, demi
              kemajuan pendidikan bangsa.
            </pre>
          </section>
        </Container>
      </section>
    </section>
  );
};

export default AboutLexica;
