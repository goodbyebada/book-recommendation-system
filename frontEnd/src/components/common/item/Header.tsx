// Header.tsx

"use client";
import React from "react";
import Link from "next/link";
import { HEADER_HEIGHT } from "@data/const";
import { useWebViewState } from "@utils/provider";

function Header() {
  const isWebView = useWebViewState();
  if (isWebView) return null;

  return (
    <nav className="header" style={{ height: HEADER_HEIGHT }}>
      <div className="d-flex text-white flex-row justify-content-between">
        <Link className="p-3 navbar-brand" href="#">
          독서하냥
        </Link>
        <ul className="ms-auto">
          <li>
            <Link className="nav-link link-active-custom" href="/">
              정보 재입력하기
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
