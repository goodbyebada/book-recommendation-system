import DepartmentBookSampleList from "@components/feature/home/DepartmentBookSampleList";
import Link from "next/link";

function RecommendationCallToAction() {
  return (
    <section className="section ai-section">
      <div className="ai-box">
        <h2>AI 도서 추천</h2>
        <p>지금 나에게 꼭 맞는 책을 AI가 추천해드립니다.</p>

        <Link href="/recommand" className="ai-btn">
          AI 추천 받기
        </Link>
      </div>
    </section>
  );
}

export default RecommendationCallToAction;
