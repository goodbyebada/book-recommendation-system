import { useEffect, useState } from "react";
import DetailBookWrapper from "@components/feature/bookDetail/DetailBookWrapper";
import BookDetailContent from "@components/feature/bookDetail/BookDetailContent";
import { BookItemInterface } from "@utils/model/interfaceModel";
import LoadingComponent from "../../LoadingComponent";
import CloseButton from "@components/common/buttons/CloseButton";

// TODO 현재 Layout 이 아님 네이밍에 맞게 수정필요

export default function BookDetailLayout({
  selectedBook,
  clickEvent,
}: {
  selectedBook: BookItemInterface;
  clickEvent: () => void;
}) {
  // aboutBook은 데이터 없을 일이 없음 -> loading isData true로 처리
  const [currentBook, setBook] = useState<BookItemInterface>(selectedBook);

  return (
    <DetailBookWrapper>
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
    </DetailBookWrapper>
  );
}
