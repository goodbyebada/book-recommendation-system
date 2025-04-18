// Footer.tsx
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-body h-[10rem] bg-light-sky-blue p-4 text-light-gray">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Link
            className="text-blue-600"
            href="https://github.com/yppp33/capstone"
            target="_blank"
          >
            Github
          </Link>

          <span className="mx-2">|</span>
          <span>&copy; 2024.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
