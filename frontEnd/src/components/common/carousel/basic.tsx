"use client";
import React, { useState, useEffect, useCallback } from "react";

//   샘플 데이터
const items = [
  {
    id: 1,
    title: "웹툰 제목 1",
    subtitle: "흥미진진한 스토리",
    author: "작가A",
    rating: "★★★★☆",
    color: "bg-gradient-to-r from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "웹툰 제목 2",
    subtitle: "로맨틱 코미디",
    author: "작가B",
    rating: "★★★★★",
    color: " bg-gradient-to-r from-purple-600 to-pink-600",
  },
  {
    id: 3,
    title: "웹툰 제목 3",
    subtitle: "액션 어드벤처",
    author: "작가C",
    rating: "★★★☆☆",
    color: "bg-gradient-to-r from-red-600 to-orange-600",
  },
  {
    id: 4,
    title: "웹툰 제목 4",
    subtitle: "판타지 모험",
    author: "작가D",
    rating: "★★★★☆",
    color: "bg-gradient-to-r from-green-600 to-teal-600",
  },
  {
    id: 5,
    title: "웹툰 제목 5",
    subtitle: "일상 드라마",
    author: "작가E",
    rating: "★★★★★",
    color: "bg-gradient-to-r from-yellow-600 to-red-600",
  },
  {
    id: 6,
    title: "웹툰 제목 6",
    subtitle: "스릴러 미스터리",
    author: "작가F",
    rating: "★★★★☆",
    color: "bg-gradient-to-r from-gray-600 to-blue-600",
  },
];

// 상수화
const TRANSITION_DURATION = 500;
const TRANSITION_RESET_DELAY = 50;

function SimpleCarousel() {
  const originStartDataIndex = 1;
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);

  //   어차피 배열 인덱스로 가는건데 배열 인덱스만 알면되잖아.

  const data = [
    { ...items[items.length - 1], id: "clone-last" }, // 마지막 복사본
    ...items, // 원본들
    { ...items[0], id: "clone-first" }, // 첫번째 복사본
  ];
  const originLastDataIndex = data.length - 2;

  // 이전 슬라이드
  const goToPrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // 다음 슬라이드
  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // 특정 슬라이드로 이동
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  //   언제 분기 처리해야하지?

  //   // 자동 재생
  //   useEffect(() => {
  //     const interval = setInterval(goToNext, 3000);
  //     return () => clearInterval(interval);
  //   }, []);

  const setCurrentIndexWithoutTransition = useCallback((index: number) => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex(index);

      setTimeout(() => setIsTransitioning(true), TRANSITION_RESET_DELAY);
    }, TRANSITION_DURATION);

    return () => clearTimeout(timer);
  }, []);

  // 무한 루프 처리
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    if (currentIndex === 0) {
      cleanup = setCurrentIndexWithoutTransition(originLastDataIndex);
      return cleanup;
    }

    if (currentIndex === originLastDataIndex + 1) {
      cleanup = setCurrentIndexWithoutTransition(1);
      return cleanup;
    }
  }, [currentIndex, setCurrentIndexWithoutTransition]);

  //
  const getActiveIndex = () => {
    if (currentIndex === 0) return originLastDataIndex; // 마지막 복사본
    if (currentIndex === originLastDataIndex + 1) return 1; // 첫번째 복사본
    return currentIndex; // 일반 케이스
  };

  return (
    <div className="mx-auto grid place-items-center">
      {/* 캐러셀 컨테이너 , 보이는 부분 */}

      <div className="w-500 h-64 overflow-hidden rounded-lg border-2 border-gray-300">
        {/* 캐러셀 트랙 */}
        <div
          className={`flex h-full ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className={`h-full min-w-full ${item.color} flex items-center justify-center text-2xl font-bold text-white`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* 컨트롤 버튼 */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={goToPrevious}
          className="rounded bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
        >
          ← 이전
        </button>
        <button
          onClick={goToNext}
          className="rounded bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
        >
          다음 →
        </button>
      </div>

      {/* 인디케이터 */}
      <div className="mt-4 flex justify-center gap-2">
        {data.map((_, index) => {
          if (1 <= index && index <= originLastDataIndex) {
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === getActiveIndex()
                    ? "bg-gray-800"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default SimpleCarousel;
