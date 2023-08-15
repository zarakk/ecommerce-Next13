// app/auth/verify/route.js
export async function GET(request) {
  const token = request.headers.get("authorization")?.split(" ")[1];
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
