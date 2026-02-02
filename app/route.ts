import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const url = new URL(request.url);
  url.searchParams.set("sent", "1");
  url.hash = "contact";
  return NextResponse.redirect(url, 303);
}
