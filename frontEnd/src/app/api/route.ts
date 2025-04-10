import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log("=========\n");
  console.log(searchParams);
  console.log("=========\n");
  let department = searchParams.get("department");

  const apiURL = "https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?";
  department = "love";

  const restUrl =
    `ttbkey=${process.env.TTB_KEY}` +
    `&Query=${department}` +
    `&QueryType=Title` +
    `&Cover=Big` +
    `&MaxResults=20&Id&output=js&Version=20131101`;

  const res = await fetch(apiURL + restUrl);
  const product = await res.json();

  return NextResponse.json(product.item);
}
