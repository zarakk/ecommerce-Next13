let products = [
  {
    id: 1,
    title: "White hat with logo",
    description: "This is a description of product 1.",
    price: 9.99,
    image: "/img-1.jpg",
  },
  {
    id: 2,
    title: "Beanie",
    description: "This is a description of product 2.",
    price: 19.99,
    image: "/img-2.jpg",
  },
  {
    id: 3,
    title: "Basic Hat",
    description: "This is a description of product 3.",
    price: 29.99,
    image: "/img-3.jpg",
  },
];
export async function GET(request, context) {
  // Get the id from the request URL
  // const url = new URL(request.url);
  // const ids = url.searchParams.get("id");
  const { id } = context.params;
  // Find the product with the specified id
  const product = products.find((product) => product.id === parseInt(id));

  // Check if a product was found
  if (!product) {
    // Return an error response
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify(product), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
