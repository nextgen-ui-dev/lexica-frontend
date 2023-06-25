import { SiNestjs } from "react-icons/si";
import Container from "../core/layout/Container";

const HomeLexicaInfo = () => {
    return (
        <div className="w-full py-12 md:py-16 space-y-8">
            <Container expanded>
                <div className="relative w-full h-[35vh] flex flex-col gap-2 justify-center items-center bg-primary-600 rounded-lg">
                    <h1 className="text-4xl md:text-6xl text-white">Motivasi</h1>
                    <p className="w-4/5 md:w-3/5 text-primary-200 text-center">
                        Meningkatkan kemampuan literasi siswa dan mahasiswa di Indonesia dengan menyediakan akses bahan bacaan menarik dan berkualitas dengan menciptakan motivasi intrinsik untuk membaca
                    </p>
                </div>
            </Container>
            <Container>
                <div className="mt-16 flex flex-col gap-12 items-center justify-center">
                    <div>
                        <h2 className="text-center">Berdasarkan riset, ditemukan bahwa</h2>
                    </div>
                    <div className="w-full grid grid-cols-4 gap-4 gap-y-8 justify-center items-center">
                        {Array(4).fill(100).map((item) => (
                            <div className="w-full col-span-2 md:col-span-1 relative hover:scale-110 transition duration-100 ease-in">
                                <div className="absolute left-1/2 -translate-x-1/2 -top-5 rounded-full p-2 bg-primary-300">
                                    <SiNestjs
                                        size={28}
                                        className="text-white"
                                    />
                                </div>
                                <div className="grow p-4 shadow-sm rounded-md border border-gray-100">
                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <h3 className="text-primary-600">{item}+</h3>
                                        <p>Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default HomeLexicaInfo;