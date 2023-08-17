let products = [
  {
    id: "1",
    title: "White hat with logo",
    price: 9.99,
    image: "/img-1.jpg",
  },
  {
    id: "2",
    title: "Beanie",
    price: 19.99,
    image: "/img-2.jpg",
  },
  {
    id: "3",
    title: "Basic Hat",
    price: 29.99,
    image: "/img-3.jpg",
  },
];

export async function GET(request) {
  // Return the product as a JSON response
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}
