function PopularBookItem({ key, tmp }: { key: number; tmp: string }) {
  return (
    <div key={key} className="popular-book-card mx-3 shrink-0">
      <img src={`https://placehold.co/200`} alt={`Book${key}`} />
      <h3 className="text-body md-[0.025rem] mt-[0.5rem]">책 제목 </h3>
      <p className="text-label text-gray-500">저자명 · 출판사</p>
    </div>
  );
}

export default PopularBookItem;
