import React from "react";
import Container from "@/components/core/layout/Container";

const BookmarksPage = () => {
  return (
    <div className={`relative w-full min-h-[100dvh] bg-backdrop`}>
      <div className={`h-[14dvh] flex flex-col gap-y-40 bg-primary-600`}></div>
      <div className="w-full bg-primary-600">
        <div className="w-full bg-backdrop rounded-t-[6dvh]">
          <Container expanded>
            <div className="flex flex-row py-[24px] md:py-[40px]">
              <h3>Bookmark Saya</h3>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BookmarksPage;
