// app/auth/signup/route.js
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const users = [{ email: "zarak@gmail.com", password: "zarak" }];

const secret = "SECRET_KEY";

export async function POST(request) {
  const { email, password } = await request.json();
  const user = { id: users.length + 1, email, password };
  users.push(user);
  return NextResponse.json({ message: "User created" });
}
