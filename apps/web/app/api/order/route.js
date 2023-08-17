import fs from "fs";

export default function POST(request) {
  const orderDetails = request.body;

  // Write order details to file
  fs.writeFileSync("orders.txt", JSON.stringify(orderDetails, null, 2));

  res.status(200).json({ message: "Order placed successfully" });
}
