// // app/auth/signup/route.js
// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// const users = [{ email: "zarak@gmail.com", password: "zarak" }];

// const secret = "SECRET_KEY";

// // api/auth/login/route.js
// export async function POST(request) {
//   const { email, password } = await request.json();
//   const user = users.find((u) => u.email === email && u.password === password);
//   if (!user) {
//     return NextResponse.json({
//       message: "Email or password is incorrect",
//     }).status(400);
//   }
//   const token = jwt.sign({ sub: user.id }, secret, { expiresIn: "1h" });
//   return NextResponse.json({ token, role: "admin" });
// }

import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const users = [{ email: "zarak@gmail.com", password: "zarak" }];

const secret = "SECRET_KEY";

// export async function GET(request) {
//   const { email, password } = request.query;
//   const user = users.find((u) => u.email === email && u.password === password);
//   if (!user) {
//     return NextResponse.json({
//       message: "Email or password is incorrect",
//     }).status(400);
//   }
//   const token = jwt.sign({ sub: user.id }, secret, { expiresIn: "1h" });
//   const cookie = serialize("token", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== "development",
//     maxAge: 60 * 60,
//     sameSite: "lax",
//     path: "/",
//   });
//   return NextResponse.json({ role: "admin" }).setHeader("Set-Cookie", cookie);
// }

export async function POST(request) {
  const { email, password } = await request.json();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return NextResponse.json({
      message: "Email or password is incorrect",
    }).status(400);
  }
  const token = jwt.sign({ sub: user.id }, secret, { expiresIn: "1h" });
  const cookie = serialize("token", token, {
    httpOnly: true,
    // secure: process.env.NODE_ENV !== "development",
    maxAge: 60 * 60,
    sameSite: "lax",
    path: "/",
  });

  return NextResponse.json(
    { role: "admin" },
    {
      status: 200,
      headers: { "Set-Cookie": cookie },
    }
  );
}
