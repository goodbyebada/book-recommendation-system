"use client";
import React, { forwardRef } from "react";
import { navItemType } from "@utils/model/interfaceModel";
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
        className="box-shadow mb-3 flex rounded bg-white p-[20px] pb-[50px] last:rounded"
      >
        <div className="overflow-x-scroll">
          <h2 className="mb-[10px] text-subtitle text-black">{item}</h2>
          <div className="text-body text-light-gray">
            {typeof content === "string" ? (
              content !== "" ? (
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
              ) : (
                <p>설명이 없습니다.</p>
              )
            ) : (
              <SimilarBooksList props={props} />
            )}
          </div>
        </div>
      </section>
    );
  },
);

export default BookDetailSection;
