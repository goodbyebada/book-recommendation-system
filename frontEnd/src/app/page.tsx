import HeroSection from "@components/feature/home/HeroSection";
import PopularBookList from "@components/feature/home/PopularBookList";
import RecommendationCallToAction from "@components/feature/home/RecommendationCallToAction";
import DepartmentBookSampleList from "@components/feature/home/DepartmentBookSampleList";

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <PopularBookList />
      <RecommendationCallToAction />
      <DepartmentBookSampleList />
    </main>
  );
}
