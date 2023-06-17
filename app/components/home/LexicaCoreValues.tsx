import { FaCrown } from "react-icons/fa";
import Container from "../core/layout/Container";
import { SiNestjs } from "react-icons/si";

const LexicaCoreValues = () => {
    return (
        <>
            <div className="relative w-full h-[40vh] flex flex-col gap-y-40 bg-primary-600">
                <div className="absolute w-full top-[10%] left-1/2 -translate-x-1/2">
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                        <FaCrown size={24} className="text-primary-300 animate-bounce" />
                        <h2 className="text-white">Nilai utama kami</h2>
                        <p className="text-white">Kami hadir untuk menyebarkan</p>
                    </div>
                </div>
                <div className="absolute w-full h-full md:h-[40vh] -bottom-[50%]">
                    <Container>
                        <div className="w-full h-fit md:h-[40vh] grid grid-cols-3 bg-white rounded-lg shadow-md p-4 gap-4">
                            <div className="relative w-full h-full flex flex-col col-span-3 md:col-span-1 items-center justify-end">
                                <div className="relative w-full h-5/6 flex flex-row items-center justify-start md:justify-center p-4 bg-primary-600 rounded-lg group hover:scale-105 transition duration-150 ease-in">
                                    <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-5 rounded-xl group-hover:rounded-full transition duration-300 ease-in p-2 bg-primary-300">
                                        <SiNestjs
                                            size={28}
                                            className="text-white"
                                        />
                                    </div>
                                    <h5 className="text-start md:text-center text-slate-200 px-4 font-normal">Akses ke bahan bacaan berkualitas</h5>
                                </div>
                            </div>
                            <div className="relative w-full h-full flex flex-col col-span-3 md:col-span-1 items-center justify-end">
                                <div className="relative w-full h-5/6 flex flex-row items-center justify-start md:justify-center p-4 bg-primary-600 rounded-lg group hover:scale-105 transition duration-150 ease-in">
                                    <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-5 rounded-xl group-hover:rounded-full transition duration-300 ease-in p-2 bg-primary-300">
                                        <SiNestjs
                                            size={28}
                                            className="text-white"
                                        />
                                    </div>
                                    <h5 className="text-start md:text-center text-slate-200 px-4 font-normal">Kemampuan menyesuaikan tingkat kesulitan</h5>
                                </div>
                            </div>
                            <div className="relative w-full h-full flex flex-col col-span-3 md:col-span-1 items-center justify-end">
                                <div className="relative w-full h-5/6 flex flex-row items-center justify-start md:justify-center p-4 bg-primary-600 rounded-lg group hover:scale-105 transition duration-150 ease-in">
                                    <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-5 rounded-xl group-hover:rounded-full transition duration-300 ease-in p-2 bg-primary-300">
                                        <SiNestjs
                                            size={28}
                                            className="text-white"
                                        />
                                    </div>
                                    <h5 className="text-start md:text-center text-slate-200 px-4 font-normal">Pengembangan motivasi intrinsik</h5>
                                </div>
                            </div>
                            <div className="relative w-full h-full flex flex-col col-span-3 md:col-span-1 items-center justify-end">
                                <div className="relative w-full h-5/6 flex flex-row items-center justify-start md:justify-center p-4 bg-primary-600 rounded-lg group hover:scale-105 transition duration-150 ease-in">
                                    <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-5 rounded-xl group-hover:rounded-full transition duration-300 ease-in p-2 bg-primary-300">
                                        <SiNestjs
                                            size={28}
                                            className="text-white"
                                        />
                                    </div>
                                    <h5 className="text-start md:text-center text-slate-200 px-4 font-normal">Melatih pemahaman teks yang kompleks</h5>
                                </div>
                            </div>
                            <div className="relative w-full h-full flex flex-col col-span-3 md:col-span-1 items-center justify-end">
                                <div className="relative w-full h-5/6 flex flex-row items-center justify-start md:justify-center p-4 bg-primary-600 rounded-lg group hover:scale-105 transition duration-150 ease-in">
                                    <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-5 rounded-xl group-hover:rounded-full transition duration-300 ease-in p-2 bg-primary-300">
                                        <SiNestjs
                                            size={28}
                                            className="text-white"
                                        />
                                    </div>
                                    <h5 className="text-start md:text-center text-slate-200 px-4 font-normal">Pembelajaran berkelanjutan</h5>
                                </div>
                            </div>
                            <div className="relative w-full h-full flex flex-col col-span-3 md:col-span-1 items-center justify-end">
                                <div className="relative w-full h-5/6 flex flex-row items-center justify-start md:justify-center p-4 bg-primary-600 rounded-lg group hover:scale-105 transition duration-150 ease-in">
                                    <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-5 rounded-xl group-hover:rounded-full transition duration-300 ease-in p-2 bg-primary-300">
                                        <SiNestjs
                                            size={28}
                                            className="text-white"
                                        />
                                    </div>
                                    <h5 className="text-start md:text-center text-slate-200 px-4 font-normal">Aksesbilitas merata</h5>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="w-full h-[32vh] md:h-[20vh]" />
        </>
    );
}

export default LexicaCoreValues;