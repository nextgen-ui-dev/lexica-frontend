import { SiNestjs } from "react-icons/si";
import Container from "../core/layout/Container";

const HomeLexicaInfo = () => {
    return (
    <div className="w-full py-12 md:py-16 space-y-8">
        <Container expanded>
            <div className="w-full h-[35vh] bg-primary-600 rounded-lg">

            </div>
        </Container>
        <Container>
            <div className="flex flex-col gap-8 items-center justify-center">
                <div>
                    <h2>Berdasarkan riset, ditemukan bahwa</h2>
                </div>
                <div className="w-full flex flex-row gap-4 justify-center items-center">
                    {Array(4).fill(100).map((item) => (
                        <div className="w-full relative">
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