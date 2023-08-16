import LandingPage from "ui/LandingPage";

export default async function Page() {
  const products = await getProducts();
  // const fetchprod = async () => {
  //   const res = await fetch("/api/products", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const products = await res.json();

  //   console.log("res", products);
  // };

  // useEffect(() => {
  //   fetchprod();
  // });
  // console.log(products[0]);
  return <LandingPage products={products} />;
}

export async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const products = await res.json();

  return products;
}
