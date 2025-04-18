const departments = [
  {
    name: "컴퓨터공학과",
    books: ["클린 코드", "코드 컴플리트"],
  },
  {
    name: "경영학과",
    books: ["전략의 본질", "넛지"],
  },
  {
    name: "디자인학과",
    books: ["디자인 씽킹", "그리드 시스템"],
  },
];

function DepartmentBookSampleList() {
  return (
    <section className="content-center-col">
      <h2 className="mb-10 text-title">우리 학과 하냥인의 Pick은?</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {departments.map((dept) => (
          <div className="dept-card" key={dept.name}>
            <h4 className="dept-card-title">{dept.name}</h4>
            <img src={`https://placehold.co/200`} />
            <ul>
              {dept.books.map((book) => (
                <li key={book}>{book}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DepartmentBookSampleList;
