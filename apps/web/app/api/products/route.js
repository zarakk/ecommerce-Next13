let products = [
  {
    id: "1",
    title: "Product 1",
    description: "This is a description of product 1.",
    price: 9.99,
    image: "/img-1.jpg",
  },
  {
    id: "2",
    title: "Product 2",
    description: "This is a description of product 2.",
    price: 19.99,
    image: "/img-2.jpg",
  },
  {
    id: "3",
    title: "Product 3",
    description: "This is a description of product 3.",
    price: 29.99,
    image: "/img-3.jpg",
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}
