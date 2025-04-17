// Footer.tsx
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-light-sky-blue text-bodyBase p-4 text-light-gray h-[10rem]">
      <div className="flex flex-col justify-center items-center">
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
