const ArticleHeroCardSkeleton = () => {
    return (
        <div className="w-full h-[34dvh] md:h-[35dvh] bg-white rounded-3xl shadow-sm px-4 p-4 group">
            <div className="w-full h-full flex flex-col items-center justify-evenly md:flex-row animate-pulse">
                <div className="w-full h-full max-h-32 md:max-h-min flex flex-row justify-center gap-4">
                    <div className="relative w-1/2 md:w-1/3 h-full rounded-2xl bg-primary-100"/>
                    <div className="w-2/3 h-full flex flex-col items-start justify-center md:justify-around">
                        <div className="flex flex-col w-full justify-evenly gap-2">
                            <div className="flex flex-row w-full h-full items-center gap-x-4">
                                <div className="h-6 bg-primary-100 rounded-full w-1/5 mb-4" />
                                <div className="h-4 bg-primary-100 rounded-full w-1/4 mb-4" />
                            </div>
                            <div className="w-full flex flex-col">
                                <div className="h-3 bg-primary-100 rounded-full w-4/5 mb-4" />
                                <div className="h-3 bg-primary-100 rounded-full w-2/5 mb-4" />
                                <div className="h-3 bg-primary-100 rounded-full w-3/5 mb-4" />
                                <div className="h-3 bg-primary-100 rounded-full w-3/5 mb-4" />
                                <div className="hidden md:block h-3 bg-primary-100 rounded-full w-4/5 mb-4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-1/3 md:hidden flex flex-col items-center justify-center pt-2">
                    <div className="h-3 bg-primary-100 rounded-full w-full mb-4" />
                    <div className="h-3 bg-primary-100 rounded-full w-full mb-4" />
                    <div className="h-3 bg-primary-100 rounded-full w-full mb-4" />
                </div>
            </div>
        </div>
    );
}

export default ArticleHeroCardSkeleton;