"use client";

import { navItemType } from "@utils/model/interfaceModel";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { HEADER_HEIGHT } from "@data/const";
import { useWebViewState } from "@utils/provider";

/**
 *  책 상세 페이지
 *
 * 책 소개 | 카테고리 | 이 책을 좋아한다면 네비 바
 * @param param0
 * @returns
 */

// TODO observer과 컴포넌트 분리
export default function BookDetailSectionNav({
  scrollRef,
  navItemList,
}: {
  scrollRef: React.MutableRefObject<HTMLElement[]>;
  navItemList: navItemType[];
}) {
  const [navIndex, setNavIndex] = useState<null | number>(null);
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const navRef = useRef<HTMLElement[]>([]);
  const isWebView = useWebViewState();

  useEffect(() => {
    if (navIndex !== null) {
      scrollRef.current[navIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      navRef.current.forEach((ref) => {
        if (ref.classList.contains("active")) {
          ref.classList.remove("active");
        }
      });

      navRef.current[navIndex].classList.add("active");
    }
  }, [navIndex]);

  useEffect(() => {
    const option = {
      threshold: 0,
      rootMargin: `-${window.innerHeight / 2 - 1}px 0px`,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elem = entry.target as HTMLElement;
          const index = scrollRef.current.indexOf(elem);
          setActiveIndex(index);
          console.log(index);
        }
      });
    }, option);

    if (scrollRef.current.length > 0) {
      scrollRef.current.forEach((elem) => observer.observe(elem));
    }

    return () => {
      if (scrollRef.current.length > 0) {
        scrollRef.current.forEach((elem) => {
          if (elem !== null) {
            observer.unobserve(elem);
          }
        });
      }
    };
  }, [scrollRef]);

  useEffect(() => {
    if (activeIndex !== null) {
      navRef.current.forEach((ref) => {
        if (ref.classList.contains("active")) {
          ref.classList.remove("active");
        }
      });

      navRef.current[activeIndex].classList.add("active");
    }
  }, [activeIndex]);

  // useEffect(() => {
  //   if (window.innerWidth <= 389) {
  //     console.log("hui");
  //     document.getElementById("aboutBook_tab")?.classList.add("nav-pills");
  //   } else {
  //     document.getElementById("aboutBook_tab")?.classList.remove("nav-pills");
  //     document
  //       .getElementById("aboutBook_tab")
  //       ?.classList.remove("nav-justified");
  //   }
  // });
  return (
    <nav
      style={{
        position: "sticky",
        top: `${isWebView ? "0px" : HEADER_HEIGHT}`,
        zIndex: 1,
      }}
    >
      <ul id="aboutBook_tab" className="nav nav-tabs bg-white ">
        {navItemList.map((elem, idx) => (
          <li
            onClick={() => {
              setNavIndex(idx);
            }}
            key={idx}
            className={`nav-item`}
          >
            {/* TODO 왜 a태그 굳이 사용했는가?  확인 후 수정 */}
            {/* TODO className 선언 통일 {`nav-item`} or 'nav-item'  */}
            <a
              className={`nav-link`} // 클릭된 탭이면 active 클래스 부여
              aria-current="page"
              ref={(ref) => {
                if (ref) {
                  navRef.current[idx] = ref;
                }
              }}
            >
              {elem.item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
