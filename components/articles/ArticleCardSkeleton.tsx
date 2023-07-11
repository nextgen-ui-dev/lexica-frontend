"use client";

const ArticleCardSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-row gap-4 p-8 bg-white shadow-sm rounded-xl animate-pulse">
      <div className="w-full h-full flex flex-col md:flex-row gap-4">
        <div className="w-full h-full flex flex-row justify-center items-center gap-3">
          <div className="w-2/3 h-full flex flex-col items-start justify-evenly gap-2">
            <div className="h-4 bg-primary-100 rounded-full w-1/5 mb-4" />
            <div className="w-full h-full flex flex-col gap-2">
              <div className="h-3 bg-primary-100 rounded-full w-3/5 mb-4" />
              <div className="md:hidden h-3 bg-primary-100 rounded-full w-3/5 mb-4" />
            </div>
            <div className="w-full h-full hidden md:flex flex-col items-start justify-center">
              <div className="h-2.5 bg-primary-100 rounded-full w-4/5 mb-4" />
              <div className="h-2.5 bg-primary-100 rounded-full w-2/5 mb-4" />
              <div className="h-2.5 bg-primary-100 rounded-full w-3/5 mb-4" />
              <div className="h-2.5 bg-primary-100 rounded-full w-4/5 mb-4" />
            </div>
          </div>
          <div className="relative w-1/3 h-[12dvh] md:h-[20dvh] rounded-2xl overflow-hidden bg-primary-100"></div>
        </div>
        <div className="w-full h-full md:hidden flex flex-col items-start justify-center">
          <div className="h-2.5 bg-primary-100 rounded-full w-full mb-4" />
          <div className="h-2.5 bg-primary-100 rounded-full w-full mb-4" />
          <div className="h-2.5 bg-primary-100 rounded-full w-full mb-4" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
