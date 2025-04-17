import { NextResponse } from "next/server";

// {
//   code: "API_FORBIDDEN_USER",
//   message: "API 출력을 허용하지 않은 회원입니다.",
//   userMessage: "해당 기능을 이용하려면 관리자에게 문의해주세요."
// }

interface customError extends Error {
  code: number;
  userMessage: string;
}

// 알라딘의 경우 error code 나와있지 않아 임시로 작성해놓음
function handleApiError(error: customError) {
  // 공통 에러 메시지 처리
  if (error.code === 401) return "로그인이 필요합니다.";
  if (error.code === 500) return "서버 오류입니다. 다시 시도해주세요.";
  return error.userMessage || "알 수 없는 오류입니다.";
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // [ ] 배포시 로그 지우기
  console.log("=========\n");
  console.log(searchParams);
  console.log("=========\n");
  let department = searchParams.get("department");

  const TMP_VAR = "love";
  department = TMP_VAR;

  const apiURL = "https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?";

  const restUrl =
    `ttbkey=${process.env.TTB_KEY}` +
    `&Query=${department}` +
    `&QueryType=Title` +
    `&Cover=Big` +
    `&MaxResults=20&Id&output=js&Version=20131101`;

  try {
    const res = await fetch(apiURL + restUrl);
    const data = await res.json();

    if (!res.ok || data.errorCode) {
      throw new Error(data.errorMessage || "상품 정보를 불러올 수 없습니다.");
    }

    return NextResponse.json({
      success: true,
      product: data.item,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      error: (e as customError).message || "알 수 없는 오류가 발생했습니다.",
    });
  }
}
