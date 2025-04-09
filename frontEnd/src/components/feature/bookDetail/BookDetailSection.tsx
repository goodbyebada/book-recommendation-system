"use client";
import React, { forwardRef } from "react";
import { navItemType } from "@utils/model/interfaceModel";
import styles from "@styles/detailInfo.module.css";
import SimilarBooksList from "@components/feature/bookDetail/SimilarBooksList";

/**
 * nav에 대응되는 content
 */
const BookDetailSection = forwardRef(
  (props: navItemType, ref: React.ForwardedRef<HTMLElement[]>) => {
    console.log(props);
    const { idx, tagId, item, content, onClickBook } = props;

    return (
      <section
        ref={(currentRef: HTMLElement) => {
          if (
            ref !== null &&
            typeof ref !== "function" &&
            ref.current !== null
          ) {
            ref.current[idx] = currentRef;
          }
        }}
        id={idx.toString()}
        className={styles.detail_section}
      >
        <div className={styles.detail_info_content}>
          <h2 className={styles.detail_title}>{item}</h2>
          {typeof content === "string" ? (
            content !== "" ? (
              <p
                dangerouslySetInnerHTML={{ __html: content }}
                className={styles.detail_text}
              ></p>
            ) : (
              <p className={styles.detail_text}>설명이 없습니다.</p>
            )
          ) : (
            <SimilarBooksList props={props} />
          )}
        </div>
      </section>
    );
  }
);

export default BookDetailSection;
