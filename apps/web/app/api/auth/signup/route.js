// app/auth/signup/route.js
// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// const users = [{ email: "zarak@gmail.com", password: "zarak" }];

// const secret = "SECRET_KEY";

// export async function POST(request) {
//   const { email, password } = await request.json();
//   const user = { id: users.length + 1, email, password };
//   users.push(user);
//   return NextResponse.json({ message: "User created" });
// }

import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

const secret = "SECRET_KEY";

// export async function GET(request) {
//   const cookies = parse(request.headers.get("Cookie") || "");
//   const token = cookies.token;
//   if (!token) {
//     return NextResponse.json({ message: "Missing token" }).status(401);
//   }
//   try {
//     const decoded = jwt.verify(token, secret);
//     return NextResponse.json({ message: "Token is valid", decoded });
//   } catch (error) {
//     return NextResponse.json({ message: "Token is invalid" }).status(401);
//   }
// }

export async function POST(request) {
  const cookies = parse(request.headers.get("Cookie") || "");
  const token = cookies.token;
  if (!token) {
    return NextResponse.json({ message: "Missing token" }).status(401);
  }
  try {
    const decoded = jwt.verify(token, secret);
    return NextResponse.json({ message: "Token is valid", decoded });
  } catch (error) {
    return NextResponse.json({ message: "Token is invalid" }).status(401);
  }
}
