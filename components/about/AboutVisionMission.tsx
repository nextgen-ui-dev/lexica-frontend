import Container from "../core/layout/Container";

const AboutVisionMission = () => {
  return (
    <section className="w-full h-full bg-white">
      <section className="w-full h-auto flex flex-col gap-8 bg-primary-500 border-none rounded-t-[6dvh] px-4 py-12 md:py-16">
        <div className="w-full max-w-3xl mx-auto h-auto">
          <Container>
            <section className="w-full h-auto flex flex-col items-center gap-6">
              <h1 className="text-center text-white w-4/5 md:w-3/5">
                Visi dan Misi Kami
              </h1>
              <div className="w-full h-auto flex flex-col items-start gap-2">
                <h2 className="text-primary-300">Visi</h2>
                <p className="text-slate-200 col-span-6">
                  Meningkatkan minat dan kemampuan literasi pelajar Indonesia
                  dalam rangka membangun landasan dan dorongan belajar yang kuat
                  bagi setiap pelajar Indonesia
                </p>
              </div>
              <div className="w-full h-[0.5px] bg-slate-300" />
              <div className="w-full h-auto flex flex-col items-start gap-4">
                <h2 className="text-primary-300">Misi</h2>
                <p className="text-slate-200 col-span-6">
                  Memungkinkan proses literasi yang progresif dengan
                  mengakomodir kemampuan membaca tiap siswa lewat tingkat
                  kesulitan bacaan yang beragam, agar pelajar dapat tanpa rasa
                  takut memilih tingkat bacaan yang sesuai dengan kemampuannya
                  dan menumbuhkan kecintaan membacas
                </p>
                <div className="w-full h-[0.5px] bg-slate-300" />
                <p className="text-slate-200">
                  Menyediakan sumber bacaan yang berkualitas dan variatif agar
                  pelajar dapat memilih sesuai kebutuhan dan minatnya
                </p>
              </div>
            </section>
          </Container>
        </div>
      </section>
    </section>
  );
};

export default AboutVisionMission;
