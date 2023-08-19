import { authenticate } from "./middleware/authenticate";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const user = authenticate(request);
    // The request is authenticated, proceed with processing
    return NextResponse.json({ data: "Protected data" });
  } catch (error) {
    // The request is not authenticated, return an error response
    return NextResponse.json({ message: error.message }).status(401);
  }
}
