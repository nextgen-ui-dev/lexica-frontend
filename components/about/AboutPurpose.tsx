import Container from '../core/layout/Container';

const AboutPurpose = () => {
  return (
    <section className="w-full h-full bg-primary-500">
      <section className="w-full h-full flex flex-col gap-8 bg-primary-600 border-none rounded-t-[6dvh] px-4 py-12 md:py-16">
        <div className="w-full max-w-3xl mx-auto h-full">
          <Container>
            <div className="w-full h-full block md:hidden mb-4">
              <h1 className="w-full text-center text-white mb-2">
                Tujuan Kami
              </h1>
              <div className="w-full h-[0.25px] bg-slate-400" />
            </div>
            <section className="w-full h-full flex flex-row gap-4">
              <h1 className="w-1/5 text-white hidden md:block">Tujuan Kami</h1>
              <div className="w-full md:w-4/5 h-full grid grid-cols-1 gap-4">
                <div className="w-full h-full">
                  <p className="text-slate-200">
                    Meningkatkan minat membaca pelajar Indonesia dengan
                    penyediaan sumber bacaan yang bermutu dan beragam agar dapat
                    disesuaikan dengan kebutuhan dan minat setiap pelajar
                  </p>
                </div>
                <div className="w-full h-[0.25px] bg-slate-400" />
                <div className="w-full h-full">
                  <p className="text-slate-200">
                    Mempermudah pelajar dalam menyerap informasi dari sumber
                    bacaan dengan menyediakan tingkat kesulitan yang beragam
                    untuk setiap bacaan agar pelajar bisa memilih yang sesuai
                    dengan kemampuannya
                  </p>
                </div>
                <div className="w-full h-[0.25px] bg-slate-400" />
                <div className="w-full h-full">
                  <p className="text-slate-200">
                    Memupuk kebiasaan membaca dari pelajar Indonesia dengan
                    beragam bacaan berkualitas berkualitas serta tingkat
                    kesulitan yang dapat disesuaikan agar pelajar lebih nyaman
                    membaca
                  </p>
                </div>
                <div className="w-full h-[0.25px] bg-slate-400" />
                <div className="w-full h-full">
                  <p className="text-slate-200">
                    Meningkatkan kemampuan membaca pelajar Indonesia dengan
                    memupuk kebiasaan membaca yang diiringi peningkatan
                    kesulitan bacaan yang melatih pelajar dalam memahami bacaan
                    yang lebih sulit
                  </p>
                </div>
              </div>
            </section>
          </Container>
        </div>
      </section>
    </section>
  );
};

export default AboutPurpose;
