"use client";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Container from "../core/layout/Container";

const AboutFAQ = () => {
  return (
    <section className="w-full h-full bg-primary-600">
      <section className="w-full h-full flex flex-col gap-8 bg-white border-none rounded-t-[6dvh] px-4 py-12 md:py-16">
        <div className="w-full max-w-3xl mx-auto h-full">
          <Container expanded>
            <h1 className="w-full text-center mb-4">FAQ</h1>
            <div className="w-full block md:hidden h-[1px] bg-slate-200 mb-6" />
            <Accordion className="flex flex-col gap-4">
              <AccordionItem className="w-full h-full p-4 border border-slate-200 rounded-lg">
                <AccordionItemHeading>
                  <AccordionItemButton className="font-semibold">
                    Apa itu Lexica?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="border-t border-slate-200 mt-2 pt-2">
                  <p>
                    Lexica merupakan aplikasi web gratis yang ditujukan kepada
                    para guru, siswa, dan umum untuk meningkatkan kemampuan
                    literasi serta menumbuhkan minat membaca mereka. Kami
                    mencapai tujuan ini dengan tingkat kesulitan artikel yang
                    beragam, asisten membaca berbasis AI, serta memfasilitasi
                    pelaksanaan proses membaca dengan fitur sosial dan fitur
                    classrooms.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="w-full h-full p-4 border border-slate-200 rounded-lg">
                <AccordionItemHeading>
                  <AccordionItemButton className="font-semibold">
                    Saya adalah seorang murid/umum, bagaimana saya menggunakan
                    Lexica?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="border-t border-slate-200 mt-2 pt-2">
                  <p>
                    Kamu tinggal ke halaman Artikel dan cari artikel yang
                    menarik. Setelah itu kamu bisa memilih versi artikel dengan
                    tingkat kesulitan tertentu serta menanyakan segala
                    keraguanmu lewat asisten AI!
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="w-full h-full p-4 border border-slate-200 rounded-lg">
                <AccordionItemHeading>
                  <AccordionItemButton className="font-semibold">
                    Saya adalah seorang pengajar, bagaimana saya menggunakan
                    Lexica?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="border-t border-slate-200 mt-2 pt-2">
                  <p>
                    Anda bisa membuka menggunakan fitur Lexica Classrooms yang
                    akan terus kami kembangkan di masa mendatang!
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="w-full h-full p-4 border border-slate-200 rounded-lg">
                <AccordionItemHeading>
                  <AccordionItemButton className="font-semibold">
                    Saya memiliki pertanyaan lain
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="border-t border-slate-200 mt-2 pt-2">
                  <p>
                    Kami sangat menerima pertanyaan/masukan dari anda! Silakan
                    hubungi email berikut untuk memberikan pertanyaan atau
                    masukan anda.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </Container>
        </div>
      </section>
    </section>
  );
};

export default AboutFAQ;
