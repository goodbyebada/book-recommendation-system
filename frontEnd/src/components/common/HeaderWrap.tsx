/**
 * header
 * 제목 login logout profile 으로 구성되어있습니다.
 *
 * 사이즈에 따라 달라질 예정이다
 */
"use client";
import { HEADER_HEIGHT } from "@data/const";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@components/common/item/Header";
import Footer from "@components/common/Footer";

// TODO Header / Bottom 분리
// TODO style 컨벤션 세워 styled에 맞춰 작성할 것, 어떤 것은 style. ~ || 어떤 것은 그냥 className 적용 || bootstrap className
export default function HeaderWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  let pathCheck = pathname.substr(1, pathname.length) === "";

  return (
    <>
      <Header />
      <div
        id="main-content-area"
        className="main_content_area"
        style={{
          paddingTop: `${HEADER_HEIGHT}`,
          paddingBottom: HEADER_HEIGHT,
        }}
      >
        {children}
      </div>

      <Footer />
    </>
  );
}
