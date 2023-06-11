import Image from "next/image";
import Container from "./components/core/layout/Container";
import HydrationHandler from "./components/core/layout/HydrationHandler";
import { SiNestjs } from 'react-icons/si';
import { FaCrown } from 'react-icons/fa';

export default function Home() {

  return (
    <HydrationHandler>
      <section id="header" className="relative h-fit">
        <div className="relative w-full h-[55vh] bg-primary-600">
          <div className="absolute top-24 left-0 right-0 grid place-items-center">
            <h1 className="text-white text-8xl">Lexica</h1>
          </div>
          <div className="absolute w-full h-full">
            <Image
              src='/images/hero.png'
              alt=""
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center bottom'
              }}
            />
          </div>
          <div className="w-full absolute -bottom-8">
            <Container>
              <div className="w-full p-4 flex flex-col bg-white rounded-md shadow-sm">
                <h5>Hello</h5>
              </div>
            </Container>
          </div>
        </div>
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
        <div className="relative w-full h-[40vh] flex flex-col gap-y-40 bg-primary-600">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center justify-center gap-2">
              <FaCrown size={24} className="text-primary-300"/>
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
        <div className="w-full h-[20vh]"/>
        <div className="relative w-full h-[40vh]">
          <h2>hello</h2>
        </div>
      </section>
    </HydrationHandler>
  )
}
