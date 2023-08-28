import { products } from "./[id]/route";

const multer = require("multer");
const upload = multer({ dest: "Public/" });

export async function GET(request) {
  // Return the product as a JSON response
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  const formData = await request.formData();
  const title = formData.get("title");
  const price = formData.get("price");
  const image = formData.get("image");

  const newProduct = {
    id: products.length + 1,
    title: title,
    price: price,
    image: image,
  };
  products.push(newProduct);
  // Return the product as a JSON response
  console.log(products);
  return new Response(
    JSON.stringify({ message: "Product added Sucessfully" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
