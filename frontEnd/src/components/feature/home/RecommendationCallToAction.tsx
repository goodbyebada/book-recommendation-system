import Link from "next/link";

function RecommendationCallToAction() {
  return (
    <section className="rounded-2xl px-12	py-8 text-center m-[4rem] bg-sky-blue">
      <div className="ai-box">
        <h2 className="text-title m-2">AI 도서 추천</h2>
        <p className="text-subtitle mb-6">
          지금 나에게 꼭 맞는 책을 AI가 추천해드립니다.
        </p>

        <Link href="/recommand" className="btn">
          AI 추천 받기
        </Link>
      </div>
    </section>
  );
}

export default RecommendationCallToAction;
