"use client";

import { BookItemInterface } from "@utils/model/interfaceModel";
import noImage from "@public/images/noImage.png";

/**
 * 단일 책 상세 페이지
 *
 * 책 이미지  작가, 출판사 정보 컴포넌트
 *
 * @param bookData
 * @returns
 */
export default function BookDetailBasic({
  bookData,
}: {
  bookData: BookItemInterface;
}) {
  const { title, author, publisher, cover, publish_year } = bookData;

  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = noImage.src;
  };

  // 태블릿이상 자식 나란히 중앙위치
  // 그 이하일 시 위 아래로 배치

  function getAuthorString(authors: string) {
    if (authors.length === 0) {
      return "저자에 대한 정보가 없습니다.";
    }

    const authorList = authors.split(",");

    if (authorList.length === 1) {
      return authorList[0];
    }

    return authorList.join(" · ");
  }

  return (
    <div className="md:book-basic-md flex w-full flex-col gap-[10%] p-[3%]">
      <div className="grow-1 shrink-0 content-center">
        <img
          className="max-[50%] max-w-80"
          src={cover}
          alt="책 표지"
          onError={onErrorImg}
        />
      </div>
      <div className="grow-2 xs:content-center-col p-3 md:block">
        <h1 className="mb-[20px] text-title font-bold">{title}</h1>
        <h2 className="flex-col text-subtitle xs:mb-[5px] md:mb-0">
          저자:
          {getAuthorString(author)}
        </h2>
        <h3 className="text-body mb-[5px] text-light-gray">
          {publisher} · {publish_year}
        </h3>
      </div>
    </div>
  );
}
