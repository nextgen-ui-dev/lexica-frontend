"use client";

import Container from "@/components/core/layout/Container";
import React from "react";
import { LuVerified } from "react-icons/lu";
import { GiRank3, GiRank2, GiRank1 } from "react-icons/gi";
import { useRouter } from "next/navigation";
import DiffSegmentation from "@/components/analytics/DiffSegmentation";

const Analytics = () => {
  const router = useRouter();
  return (
    <section className="w-[100dvw] min-h-[75dvh]">
      <div className="w-full min-h-[10dvh] bg-primary-600" />
      <div className="min-h-[65dvh] w-full bg-white py-8">
        <Container>
          <div className="w-full min-h-[56dvh] flex flex-col items-center justify-center gap-4">
            <h2>Performa Membacaku</h2>
            {/*  */}
            <div
              onClick={() => router.push(`/analytics/history`)}
              className={`w-full h-full flex flex-col p-6 border rounded-lg hover:bg-gray-300 hover:bg-opacity-[.2] hover:cursor-pointer duration-300`}
            >
              <div className="flex flex-row items-center justify-between gap-4">
                <div className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-primary-300 rounded-full">
                    <LuVerified size={20} className="text-primary-600" />
                  </div>
                  <h4>Total bacaan</h4>
                </div>
                <h5>3 Artikel</h5>
              </div>
            </div>
            {/*  */}
            <div className="w-full h-full flex flex-col md:grid md:grid-cols-3 md:gap-4">
              <div className="md:col-span-1 w-full h-full flex flex-col p-6 border rounded-lg">
                <div className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-primary-300 rounded-full">
                    <GiRank3
                      size={20}
                      className="text-primary-600"
                      strokeWidth={0.5}
                    />
                  </div>
                  <div>
                    <h4>Bacaan Lanjutan</h4>
                    <h5>3 Artikel</h5>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="col-span-1 w-full h-full flex flex-col p-6 border rounded-lg">
                <div className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-primary-300 rounded-full">
                    <GiRank2
                      size={20}
                      className="text-primary-600"
                      strokeWidth={0.5}
                    />
                  </div>
                  <div>
                    <h4>Bacaan Menengah</h4>
                    <h5>3 Artikel</h5>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="col-span-1 w-full h-full flex flex-col p-6 border rounded-lg">
                <div className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-primary-300 rounded-full">
                    <GiRank1
                      size={20}
                      className="text-primary-600"
                      strokeWidth={0.5}
                    />
                  </div>
                  <div>
                    <h4>Bacaan Pemula</h4>
                    <h5>3 Artikel</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* Pie Charts */}
            <div className="py-4 md:py-6"></div>
            <h2>Analisis Grafik</h2>
            <DiffSegmentation />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Analytics;
