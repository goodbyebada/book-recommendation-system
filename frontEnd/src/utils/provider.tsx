"use client";

import { createContext, useContext } from "react";

type webViewStateState = boolean;

export const WebViewStateContext = createContext<webViewStateState | null>(
  null
);

// 컨텍스트 제공
export function WebViewStateProvider({
  children,
  webViewState,
}: {
  children: React.ReactNode;
  webViewState: webViewStateState;
}) {
  return (
    <WebViewStateContext.Provider value={webViewState}>
      {children}
    </WebViewStateContext.Provider>
  );
}

// 컨텍스트 사용
export function useWebViewState() {
  return useContext(WebViewStateContext)!; // 타입 단언
}
