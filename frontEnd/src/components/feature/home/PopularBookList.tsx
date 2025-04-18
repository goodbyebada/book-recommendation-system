import PopularBookItem from "@components/feature/home/PopularBookItem";

// TODO  section H2 flex wrapper  DepartmentBookSampleList 같은 형식  -> templete로 제작할것
function PopularBookList() {
  const tmpData = Array.from({ length: 20 }, (_, i) => i);
  return (
    <section>
      <h2 className="mb-10 content-center text-title">추천 도서</h2>
      <div className="flex overflow-x-auto p-4">
        {tmpData.map((n) => (
          <PopularBookItem key={n} tmp={"임시"} />
        ))}
      </div>
    </section>
  );
}

export default PopularBookList;
