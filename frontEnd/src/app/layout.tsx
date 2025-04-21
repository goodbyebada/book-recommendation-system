import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import favicon from "@public/icons/hanyang.svg";

import Header from "@components/common/item/Header";
import Footer from "@components/common/item/Footer";
import { HEADER_HEIGHT } from "@data/const";

export const metadata: Metadata = {
  title: "독서하냥",
  description: "한양대 에리카 소속된 사람들에게 책을 추천해주는 사이트입니다.",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-display">
        <Header />
        <div
          id="main-content-area"
          style={{
            paddingTop: `${HEADER_HEIGHT}`,
            paddingBottom: HEADER_HEIGHT,
          }}
        >
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
