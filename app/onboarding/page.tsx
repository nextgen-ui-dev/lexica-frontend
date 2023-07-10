"use client";

import { useRouter } from "next/navigation";
import ArticleHomePreviews from "../components/home/ArticlesHomePreview";
import HomeHero from "../components/home/HomeHero";
import HomeLexicaInfo from "../components/home/HomeLexicaInfo";
import OnboardingModal from "../components/core/organism/modals/OnboardingModal";

const OnboardingPage = () => {
    const router = useRouter();
    const isNewInstall = true;

    if (!isNewInstall) {
        router.replace('/')
    } else {
        document.body.classList.add('overflow-hidden');
    }

    return (
        <section id="" className="relative">
            <OnboardingModal />
            <HomeHero />
            <HomeLexicaInfo />
            <ArticleHomePreviews />
        </section>
    );
}

export default OnboardingPage;

