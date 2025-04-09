// Footer.tsx
import React from "react";
import Link from "next/link";

// CHECK 컴포넌트로 옮기면서 Footer 디자인이 달라졌는데, bootstrap 사용하니까 무슨 디자인인지 파악이 안된다.

/* TODO CSS 선언 점검 제발 */

function Footer() {
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
