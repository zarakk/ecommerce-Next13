// import { NextResponse } from "next/server";

// import fs from "fs";

// export async function POST(request) {
//   const orderDetails = await request.json();
//   console.log(orderDetails);
//   // Write order details to file
//   fs.writeFileSync("orders.txt", JSON.stringify(orderDetails, null, 2));

//   return NextResponse.json({ message: "Order placed successfully" });
// }

// export function GET(request, response) {
//   try {
//     // Read order details from file
//     const orderDetails = fs.readFileSync("orders.txt", "utf-8");
//     return NextResponse.json(JSON.parse(orderDetails));
//   } catch (error) {
//     // Handle error
//     return NextResponse.json({
//       message: "An error occurred while reading orders",
//     });
//   }
// }

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// Replace with your MongoDB connection string
const uri =
  "mongodb+srv://zedd0099:LNm50oU5LOFu0Y5t@eccomapp.lhgyllq.mongodb.net?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export async function POST(request) {
  const orderDetails = await request.json();
  console.log(orderDetails);

  // Connect to MongoDB and insert order details
  await client.connect();
  const db = client.db("eccomApp");
  await db.collection("orders").insertOne(orderDetails);

  return NextResponse.json({ message: "Order placed successfully" });
}

export async function GET(request) {
  try {
    // Connect to MongoDB and read order details
    await client.connect();
    const db = client.db("eccomApp");
    const orderDetails = await db.collection("orders").find().toArray();

    return NextResponse.json(orderDetails);
  } catch (error) {
    // Handle error
    return NextResponse.json({
      message: "An error occurred while reading orders",
    });
  }
}
