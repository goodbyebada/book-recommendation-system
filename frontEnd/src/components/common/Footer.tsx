// Footer.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useWebViewState } from "@utils/provider";

/* TODO CSS 선언 점검 제발 */

function Footer() {
  const isWebView = useWebViewState();
  if (isWebView) return null;

  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <div className="text-body-secondary">
          <Link href="https://github.com/yppp33/capstone" target="_blank">
            Github
          </Link>
          {/* TODO CSS 선언 점검  */}
          <span id="bar" className="mx-2">
            |
          </span>
          <span id="copy-right">&copy; 2024.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
