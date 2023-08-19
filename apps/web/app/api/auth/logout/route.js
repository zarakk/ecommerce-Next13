import { NextResponse } from "next/server";

export async function POST(request) {
  const cookie = serialize("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    expires: new Date(0),
    sameSite: "lax",
    path: "/",
  });
  return new NextResponse(null, {
    status: 200,
    headers: { "Set-Cookie": cookie },
  });
}
