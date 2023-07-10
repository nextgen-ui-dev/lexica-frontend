"use client"
import Container from "../../layout/Container";
import Button from "../../molecules/Button";

const Footer = () => {
    return (
            <footer className="relative w-full h-full flex flex-row items-center bg-primary-600 py-8">
                <Container>
                    <div className="w-full flex flex-col items-center justify-between gap-4">
                        <div className="w-full flex flex-col items-center justify-center gap-2">
                            <h3 className="text-white">Siapkah anda untuk membaca lebih efisien?</h3>
                            <p className="text-gray-200">Rasakan sensasi membaca seperti bermain sosial media</p>
                            <div className="w-full max-w-xs">
                                <Button
                                    label="Jelajahi lebih lanjut"
                                    onClick={() => { }}
                                    accent
                                    fullRounded
                                />
                            </div>
                        </div>
                        <h6 className="text-xs text-gray-200">© 2023 Lexica. All rights reserved</h6>
                    </div>
                </Container>
            </footer>
    );
}

export default Footer;