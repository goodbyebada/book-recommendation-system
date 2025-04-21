import { useState } from "react";
import BookDetailContent from "@components/feature/bookDetail/BookDetailContent";
import { BookItemInterface } from "@utils/model/interfaceModel";
import LoadingComponent from "../../LoadingComponent";
import CloseButton from "@components/common/buttons/CloseButton";

export default function SelectedBookDetailModal({
  selectedBook,
  clickEvent,
}: {
  selectedBook: BookItemInterface;
  clickEvent: () => void;
}) {
  // aboutBook은 데이터 없을 일이 없음 -> loading isData true로 처리
  const [currentBook, setBook] = useState<BookItemInterface>(selectedBook);

  return (
    <div className="box-shadow rounded-lg bg-white xs:m-[2rem] md:m-[5rem]">
      <div className="d-flex justify-content-end">
        <CloseButton onClick={clickEvent} />
      </div>
      {currentBook ? (
        <BookDetailContent
          bookData={currentBook}
          changeBook={(bookItem: BookItemInterface) => {
            setBook(bookItem);
          }}
        />
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}
