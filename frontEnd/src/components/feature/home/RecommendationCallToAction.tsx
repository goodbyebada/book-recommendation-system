import Link from "next/link";

function RecommendationCallToAction() {
  return (
    <section className="m-[4rem] rounded-2xl bg-sky-blue px-12 py-8 text-center">
      <div>
        <h2 className="m-2 text-title">AI 도서 추천</h2>
        <p className="mb-6 text-subtitle">
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
