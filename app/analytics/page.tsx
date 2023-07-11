"use client"

import Container from "@/components/core/layout/Container";
import React from "react";
import { LuVerified } from "react-icons/lu";
import { GiRank3, GiRank2, GiRank1 } from "react-icons/gi";

const Analytics = () => {
  return (
    <section className="min-h-[75dvh]">
      <div className="w-full min-h-[10dvh] bg-primary-600" />
      <div className="min-h-[65dvh] w-full bg-white py-8">
        <Container>
          <div className="w-full min-h-[56dvh] flex flex-col items-center justify-center gap-4">
            <h3>Peformaku</h3>
            <div className="w-full h-full flex flex-col p-6 border rounded-lg">
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
            <div className="w-full h-full grid grid-cols-3 gap-4">
              <div className="col-span-1 w-full h-full flex flex-col p-6 border rounded-lg">
                <div className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-primary-300 rounded-full">
                      <GiRank3 size={20} className="text-primary-600" strokeWidth={0.5} />
                    </div>
                    <div>
                      <h4>Bacaan Lanjutan</h4>
                      <h5>3 Artikel</h5>
                  </div>
                </div>
              </div>
              <div className="col-span-1 w-full h-full flex flex-col p-6 border rounded-lg">
                <div className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-primary-300 rounded-full">
                      <GiRank2 size={20} className="text-primary-600" strokeWidth={0.5} />
                    </div>
                    <div>
                      <h4>Bacaan Menengah</h4>
                      <h5>3 Artikel</h5>
                  </div>
                </div>
              </div>
              <div className="col-span-1 w-full h-full flex flex-col p-6 border rounded-lg">
                <div className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-primary-300 rounded-full">
                      <GiRank1 size={20} className="text-primary-600" strokeWidth={0.5} />
                    </div>
                    <div>
                      <h4>Bacaan Pemula</h4>
                      <h5>3 Artikel</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
};

export default Analytics;
