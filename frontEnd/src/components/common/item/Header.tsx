// Header.tsx
import React from "react";
import Link from "next/link";
import { HEADER_HEIGHT } from "@data/const";

function Header() {
  return (
    <nav
      className="flex justify-between items-center px-[2rem] box-shadow fixed top-0 z-10 bg-white w-full "
      style={{ height: HEADER_HEIGHT }}
    >
      <div className="logo">
        <Link className="p-3 navbar-brand" href="/">
          📚 독서하냥
        </Link>
      </div>
    </nav>
  );
}

export default Header;
