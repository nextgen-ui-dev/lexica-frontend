import Image from "next/image";
import Container from "../core/layout/Container";

const ArticleHomePreviews = () => {
    return (
        <Container expanded>
            <div className="relative w-full h-full mt-20 mb-16">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2>Artikel terbaru</h2>
                    <div className="w-full grid grid-cols-3 gap-4">
                        <div className="relative col-span-3 md:col-span-1 flex flex-col gap-2 w-full p-4 border border-slate-200 rounded-lg">
                            <div className='relative w-full h-[20vh] md:h-[28vh] rounded-md overflow-hidden'>
                                <Image
                                    src='/images/hero.png'
                                    alt=""
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center bottom'
                                    }}
                                    className="group-hover:scale-110 transition bg-primary-300"
                                />
                            </div>
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 flex flex-col gap-2 w-full p-4 border border-slate-200 rounded-lg">
                            <div className='relative w-full h-[20vh] md:h-[28vh] rounded-md overflow-hidden'>
                                <Image
                                    src='/images/hero.png'
                                    alt=""
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center bottom'
                                    }}
                                    className="group-hover:scale-110 transition bg-primary-300"
                                />
                            </div>
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 flex flex-col gap-2 w-full p-4 border border-slate-200 rounded-lg">
                            <div className='relative w-full h-[20vh] md:h-[28vh] rounded-md overflow-hidden'>
                                <Image
                                    src='/images/hero.png'
                                    alt=""
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center bottom'
                                    }}
                                    className="group-hover:scale-110 transition bg-primary-300"
                                />
                            </div>
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ArticleHomePreviews;