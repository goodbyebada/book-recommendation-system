"use client";

import BookItem from "@components/common/item/BookItem";
import { useState } from "react";
import { BookItemInterface, Data } from "@utils/model/interfaceModel";
import { isEmptyObj } from "@utils/model/interfaceModel";
import BookDetailLayout from "@components/feature/bookDetail/BookDetailLayout";
import { returnBookList } from "@utils/model/interfaceModel";

/**
 *
 * 사용자 정보 입력 폼 작성 이후,  사용자 맞춤 책 추천 리스트 컴포넌트
 * @param param0
 * @returns
 */

// TODO 로직 변경 필요
// 문제점 : 책 추천 리스트 페이지에서 책 선택 시 책 추천 시 , 단일 책 상세 페이지로 컴포넌트 갈아끼움
//  모달창 처럼 구현되어있음
// -> 하지만 보기엔 페이지 처럼 보여서 뒤로 가기 버튼을 누르는면 정보 입력 폼으로 이동하는 불편함 발생

export default function PersonalizedBookPage({
  dataList,
}: {
  dataList: Data[];
}) {
  /**
   * 모달 기능
   */
  const [selectedBook, setSelectedBook] = useState<BookItemInterface | null>(
    null,
  );

  const clickBook = (bookItem: BookItemInterface) => {
    if (isEmptyObj(bookItem)) {
      return;
    }
    setSelectedBook(bookItem);
  };

  const closeAboutBook = () => {
    setSelectedBook(null);
  };

  return (
    <>
      {selectedBook ? (
        // 책 추천 시 , 단일 책 상세 페이지
        <BookDetailLayout
          selectedBook={selectedBook}
          clickEvent={closeAboutBook}
        />
      ) : (
        // 책 추천 리스트 페이지
        <div>
          <h3 className="my-8 flex justify-center text-display font-bold">
            추천합니다!
          </h3>
          <div className="flex justify-center xs:px-[1rem] sm:px-[2rem]">
            {/* TODO inline style 너무 길다. 과연 가독성이 좋은지 고민  */}
            <div className="grid gap-[20px] xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {returnBookList(dataList).map((data, idx) => (
                <BookItem
                  key={idx}
                  bookInfo={data}
                  clickEvent={(bookItem: BookItemInterface) =>
                    clickBook(bookItem)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
