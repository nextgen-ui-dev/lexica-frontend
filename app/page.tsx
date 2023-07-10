import HomeHero from '../components/home/HomeHero';
import HomeLexicaInfo from '../components/home/HomeLexicaInfo';
import ArticleHomePreviews from '../components/home/ArticlesHomePreview';

export default async function Home() {
  return (
    <section id="landing-page" className="relative">
      <HomeHero />
      <HomeLexicaInfo />
      <ArticleHomePreviews />
    </section>
  );
}
