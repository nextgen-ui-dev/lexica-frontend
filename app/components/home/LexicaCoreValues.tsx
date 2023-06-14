import { FaCrown } from "react-icons/fa";
import Container from "../core/layout/Container";

const LexicaCoreValues = () => {
    return (
        <>
            <div className="relative w-full h-[40vh] flex flex-col gap-y-40 bg-primary-600">
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaCrown size={24} className="text-primary-300" />
                        <h2 className="text-white">Nilai utama kami</h2>
                        <p className="text-white">Lorem ipsum lorem ipsum bla</p>
                    </div>
                </div>
                <div className="absolute w-full h-[40vh] -bottom-[50%]">
                    <Container>
                        <div className="w-full h-[40vh] bg-white rounded-lg shadow-md">

                        </div>
                    </Container>
                </div>
            </div>
            <div className="w-full h-[20vh]" />
        </>
    );
}

export default LexicaCoreValues;