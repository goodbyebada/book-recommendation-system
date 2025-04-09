"use client";

import { BookItemInterface } from "@utils/model/interfaceModel";
import styles from "@styles/bookDetail.module.css";
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

  const authors = author.split(",");

  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = noImage.src;
  };

  return (
    <div className={styles.top_component}>
      <div id="book_cover" className={styles.book_image}>
        <img src={cover} alt="책 표지" onError={onErrorImg} />
      </div>
      <div className={styles.basic_info_detail}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.author}>
          {" "}
          저자:{" "}
          {authors.length === 0
            ? "저자에 대한 정보가 없습니다."
            : authors.map((elem, idx) => {
                if (authors.length === 1) {
                  return elem;
                }

                if (idx === authors.length - 1) {
                  console.log(idx);
                  return elem;
                }
                const singleAuthor = `${elem} · `;
                return singleAuthor;
              })}
        </h2>
        <h3 className={styles.publisher}>
          {publisher} · {publish_year}
        </h3>
      </div>
    </div>
  );
}
