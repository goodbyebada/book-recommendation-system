"use client";
import {
  AladinBookInfo,
  BookItemInterface,
  serverBook,
  serverBookToData,
} from "@utils/model/interfaceModel";
import { useEffect, useState } from "react";
import BookDetailSectionContent from "./BookDetailSectionContent";
import { returnBookList } from "@utils/model/interfaceModel";
import BookDetailBasic from "./BookDetailBasic";
import { Api2Url, useAladin, useDummy } from "@data/const";
import { dummyData } from "@data/dummyData";
import { Data } from "@utils/model/interfaceModel";
import { aladinToData } from "@utils/model/interfaceModel";

/**
 * 단일 책 상세 페이지
 * @param param0
 * @returns
 */

export default function BookDetailContent({
  bookData,
  changeBook,
}: {
  bookData: BookItemInterface;
  changeBook: (bookItem: BookItemInterface) => void;
}) {
  const [recommandBookList, setRecommandBookList] =
    useState<BookItemInterface[]>();

  useEffect(() => {
    if (useDummy) {
      const bookData = dummyData;
      const convertedDataList: Data[] = serverBookToData(bookData);
      const bookItemLsit: BookItemInterface[] =
        returnBookList(convertedDataList);
      setRecommandBookList(bookItemLsit);
    } else {
      let bookId = bookData.id;
      if (bookId === null) {
        bookId = 0;
      }
      fetch(Api2Url + "?" + `id=${bookId}`)
        .then((res) => {
          if (!res.ok) {
            // 서버쪽에 404로 주는 case가 있어 예외처리 (front에서는 빈 리스트로 간주함)
            return [];
          }
          return res.json();
        })
        .then((serverBookList: serverBook[]) => {
          const dataList = serverBookToData(serverBookList);
          return returnBookList(dataList);
        })
        .then((dataList: BookItemInterface[]) => {
          setRecommandBookList(dataList);
        })
        .catch((e) => {
          console.log("서버에서 내려주는 데이터 형식 확인 필요");
        });
    }

    //Capstone BackEndLogic
    let bookId = bookData.id;
    if (bookId === null) {
      bookId = 0;
    }
    fetch(Api2Url + "?" + `id=${bookId}`)
      .then((res) => {
        if (!res.ok) {
          // 서버쪽에 404로 주는 case가 있어 예외처리 (front에서는 빈 리스트로 간주함)
          return [];
        }
        return res.json();
      })
      .then((serverBookList: serverBook[]) => {
        const dataList = serverBookToData(serverBookList);
        return returnBookList(dataList);
      })
      .then((dataList: BookItemInterface[]) => {
        setRecommandBookList(dataList);
      })
      .catch((e) => {
        console.log("서버에서 내려주는 데이터 형식 확인 필요");
      });
  }, [bookData]);

  // const testDataList = returnBookList(dummyRecommandDataList);

  /**
   * 모델 2로 API 호출
   */

  // 책을 선택하면 recommandBookList를 선택하면 setId()
  // 1. title, author, publisher , cover 기본정보 수정
  // recommandBookList에서 id 찾아 기본 Info 구성하면 될 것 같소
  // 2. bookList 설정
  // useEffect로 재호출해 setRecommandBookList 구성

  // Book Id가 바뀔때마다 API 재호출 및 재렌더링
  // 처음 호출 시 bookList로 세팅
  // bookList 중 하나의 책을 선택하면 title, author, publisher 등 전부 다 바뀜
  // AboutBook 컴포넌트 모든 내용 수정

  return (
    <div>
      {/*학교 데이터에서 제공되는 정보만 정렬함 */}

      <BookDetailBasic bookData={bookData} />

      {/* 책 상세 정보 */}
      {recommandBookList ? (
        <BookDetailSectionContent
          bookData={bookData}
          recommandBookList={recommandBookList}
          changeBook={changeBook}
        />
      ) : (
        <div>추천 도서 로딩중입니다</div>
      )}
    </div>
  );
}
