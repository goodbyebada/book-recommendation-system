function PopularBookList() {
  const tmpData = Array.from({ length: 20 }, (_, i) => i);
  return (
    <section className="section books">
      <h2>추천 도서</h2>
      <div className="book-grid-container">
        <div className="book-grid">
          {tmpData.map((n) => (
            <div key={n} className="book-card">
              <img src={`https://placehold.co/200`} alt={`Book${n}`} />
              <h3>책 제목 {n}</h3>
              <p>저자명 · 출판사</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularBookList;
