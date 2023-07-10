'use client';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Container from '../core/layout/Container';

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
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="border-t border-slate-200 mt-2 pt-2">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="w-full h-full p-4 border border-slate-200 rounded-lg">
                <AccordionItemHeading>
                  <AccordionItemButton className="font-semibold">
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="border-t border-slate-200 mt-2 pt-2">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="w-full h-full p-4 border border-slate-200 rounded-lg">
                <AccordionItemHeading>
                  <AccordionItemButton className="font-semibold">
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="border-t border-slate-200 mt-2 pt-2">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="w-full h-full p-4 border border-slate-200 rounded-lg">
                <AccordionItemHeading>
                  <AccordionItemButton className="font-semibold">
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="border-t border-slate-200 mt-2 pt-2">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
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
