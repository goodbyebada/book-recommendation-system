"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingComponent from "@components/LoadingComponent";
import PersonalizedBookPage from "@components/feature/recommandBook/PersonalizedBookPage";
import {
  Data,
  aladinToData,
  serverBook,
  serverBookToData,
} from "@utils/model/interfaceModel";
import { useAladin, useDummy } from "@data/const";
import { Api1Url } from "@data/const";
import { dummyData } from "@data/dummyData";
import { getAladinBookList } from "@utils/getAladinBookList";

function Search() {
  const searchParams = useSearchParams();

  return <input placeholder="Search..." />;
}

export default function BookList() {
  const searchParams = useSearchParams();
  const params = decodeURI(`${searchParams}`);

  const [datalist, setData] = useState<Data[]>([]);

  /**
   * 처음 렌더링될때 한번만 API 호출를 호출한다.
   */
  useEffect(() => {
    // 임시 알라딘 호출 함수
    if (useAladin) {
      const fetchData = async () => {
        const bookData = await getAladinBookList(params);
        const convertedDataList: Data[] = aladinToData(bookData);
        setData(convertedDataList);
      };

      fetchData();
      return;
    }

    if (useDummy) {
      const bookData = dummyData;
      const convertedDataList: Data[] = serverBookToData(bookData);
      setData(convertedDataList);
      return;
    }

    const finalUrl = `${Api1Url}?${params}`;
    console.log(finalUrl);
    fetch(finalUrl)
      .then((response) => {
        if (!response.ok) {
          alert("입력받은 정보는 대출내역이 부족합니다 :(");

          // setIsData(false);
          return [];
        }
        const json = response.json();
        alert("입력받은 정보는 대출내역이 부족합니다 :(");
        console.log("api로 들어온 res json으로 변환");
        // console.log(`${json}`);
        // setIsData(false);
        return json; // JSON 데이터를 반환하는 프로미스
      })
      .then((bookData: serverBook[]) => {
        console.log(bookData); // JSON 데이터를 로깅
        const convertedDataList: Data[] = serverBookToData(bookData);
        setData(convertedDataList);
      })
      .catch((error) => {
        console.log("인터페이스 변환 실패, json로그와 함께 카톡주세요");
        alert("입력받은 정보는 대출내역이 부족합니다 :(");
        // setIsData(false);
        console.log(error);
      });
  }, []);

  return (
    <div>
      {datalist.length > 0 ? (
        <PersonalizedBookPage dataList={datalist} />
      ) : (
        // 데이터 리스트가 빈 경우 -> 로딩 또는 에러
        <LoadingComponent />
      )}
    </div>
  );
}
