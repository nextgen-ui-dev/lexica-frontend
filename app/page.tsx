import Image from "next/image";
import Container from "./components/core/layout/Container";
import HydrationHandler from "./components/core/layout/HydrationHandler";
import { SiNestjs } from 'react-icons/si';
import { FaCrown } from 'react-icons/fa';
import HomeHero from "./components/home/HomeHero";
import HomeLexicaInfo from "./components/home/HomeLexicaInfo";
import LexicaCoreValues from "./components/home/LexicaCoreValues";
import ArticleHomePreviews from "./components/home/ArticlesHomePreview";

export default function Home() {

  return (
    <HydrationHandler>
      <section id="landing-page" className="relative">
        <HomeHero />
        <HomeLexicaInfo />
        <LexicaCoreValues />
        <ArticleHomePreviews />
      </section>
    </HydrationHandler>
  )
}
