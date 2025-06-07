import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import favicon from "@public/icons/hanyang.svg";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

import Header from "@components/common/item/Header";
import Footer from "@components/common/Footer";
import { HEADER_HEIGHT } from "@data/const";
import { headers } from "next/headers";
import { WebViewStateProvider } from "@utils/provider";

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
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isWebView = userAgent.includes("webview-hanyang");

  return (
    <html lang="en">
      <body>
        <Suspense
          fallback={
            <div style={{ backgroundColor: "red", height: "500px" }}>
              Loading...
            </div>
          }
        >
          <WebViewStateProvider webViewState={isWebView}>
            <Header />
            <div
              id="main-content-area"
              className="main_content_area"
              style={{
                paddingTop: `${isWebView ? "0px" : HEADER_HEIGHT}`,
                paddingBottom: isWebView ? "0px" : HEADER_HEIGHT,
              }}
            >
              {children}
            </div>
            <Footer />
          </WebViewStateProvider>
        </Suspense>
      </body>
    </html>
  );
}
