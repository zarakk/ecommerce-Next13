import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// Replace with your MongoDB connection string
const uri =
  "mongodb+srv://zedd0099:LNm50oU5LOFu0Y5t@eccomapp.lhgyllq.mongodb.net?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export async function GET(request) {
  try {
    console.log("Connecting to MongoDB...");
    // Connect to MongoDB and send a ping command
    await client.connect();
    console.log("Connected to MongoDB. Sending ping command...");
    await client.db("admin").command({ ping: 1 });
    console.log("Ping command successful.");
    return NextResponse.json({ message: "Connected to MongoDB successfully" });
  } catch (error) {
    // Handle error
    console.error("An error occurred while connecting to MongoDB:", error);
    return NextResponse.json({
      message: "An error occurred while connecting to MongoDB",
    });
  }
}
