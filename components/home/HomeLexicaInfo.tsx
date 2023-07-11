import { GiClassicalKnowledge } from "react-icons/gi";
import { ImLibrary } from "react-icons/im";
import { AiFillTrophy } from "react-icons/ai";
import { HiEmojiSad } from "react-icons/hi";
import Container from "../core/layout/Container";

const HomeLexicaInfo = () => {
  return (
    <div className="w-full mt-16 space-y-8 bg-backdrop">
      <Container expanded>
        <div className="relative w-full h-[35vh] flex flex-col gap-2 justify-center items-center bg-primary-600 rounded-2xl">
          <h2 className=" font-bold text-white w-3/5 text-xl md:w-full md:text-3xl text-center">
            Literasi adalah hak semua orang
          </h2>
          <p className="w-4/5 md:w-4/5 text-sm md:text-base text-primary-200 text-center">
            Lexica hadir sebagai solusi digital untuk membantu pelajar Indonesia
            untuk mendapatkan akses terhadap bahan bacaan yang berkualitas serta
            melatih kemampuan literasi lewat tingkat kesulitan artikel yang
            dapat disesuaikan
          </p>
        </div>
      </Container>
      <Container>
        <div className="mt-16 flex flex-col gap-16 items-center justify-center">
          <div>
            <h2 className="text-center mx-auto w-3/5 md:w-full">
              Berdasarkan riset ditemukan bahwa
            </h2>
          </div>
          <div className="w-full grid grid-cols-4 gap-4 gap-y-8 justify-center items-center">
            <div className="w-full h-full col-span-2 md:col-span-1 cursor-pointer relative hover:scale-110 transition duration-100 ease-in">
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 rounded-full p-2 bg-primary-300">
                <AiFillTrophy size={28} className="text-white" />
              </div>
              <div className="h-full grow p-4 shadow-sm rounded-md border">
                <div className="flex flex-col items-center justify-center mt-6">
                  <h3 className="text-primary-600">62</h3>
                  <p className="text-center">
                    Urutan hasil tes dari 70 negara PISA 2018
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full col-span-2 md:col-span-1 cursor-pointer relative hover:scale-110 transition duration-100 ease-in">
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 rounded-full p-2 bg-primary-300">
                <GiClassicalKnowledge size={28} className="text-white" />
              </div>
              <div className="h-full grow p-4 shadow-sm rounded-md border">
                <div className="flex flex-col items-center justify-center mt-6">
                  <h3 className="text-primary-600">30%</h3>
                  <p className="text-center">
                    Siswa yang mencapai kemahiran dasar literasi (vs 77% rataan)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full col-span-2 md:col-span-1 cursor-pointer relative hover:scale-110 transition duration-100 ease-in">
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 rounded-full p-2 bg-primary-300">
                <HiEmojiSad size={28} className="text-white" />
              </div>
              <div className="h-full grow p-4 shadow-sm rounded-md border">
                <div className="flex flex-col items-center justify-center mt-6">
                  <h3 className="text-primary-600">86%</h3>
                  <p className="text-center">
                    Pelajar Indonesia belum merasa nyaman dalam membaca teks
                    panjang
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full col-span-2 md:col-span-1 cursor-pointer relative hover:scale-110 transition duration-100 ease-in">
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 rounded-full p-2 bg-primary-300">
                <ImLibrary size={28} className="text-white" />
              </div>
              <div className="h-full grow p-4 shadow-sm rounded-md border">
                <div className="flex flex-col items-center justify-center mt-6">
                  <h3 className="text-primary-600">80%</h3>
                  <p className="text-center">
                    Kebutuhan infrastruktur literasi negara belum terpenuhi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeLexicaInfo;
