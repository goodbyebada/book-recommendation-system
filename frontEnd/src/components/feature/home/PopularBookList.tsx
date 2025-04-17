function PopularBookList() {
  const tmpData = Array.from({ length: 20 }, (_, i) => i);
  return (
    <section className="">
      <h2 className="text-title mb-10 content-center">추천 도서</h2>
      <div className="flex overflow-x-auto p-4">
        {tmpData.map((n) => (
          <div key={n} className="book-card flex-shrink-0 mx-3">
            <img src={`https://placehold.co/200`} alt={`Book${n}`} />
            <h3>책 제목 {n}</h3>
            <p>저자명 · 출판사</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularBookList;
