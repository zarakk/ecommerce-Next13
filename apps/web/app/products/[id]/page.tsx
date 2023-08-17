import React from "react";
import Footer from "ui/Footer";
import Reviews from "ui/Reviews";

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
};

async function ProductDetailPage({ params: { id } }: any) {
  // const router = useRouter();
  // const { id } = router.query;
  // const [product, setProduct] = useState<Product | null>(null);
  const product: Product = await getProductDetails(id);

  // useEffect(() => {
  //   // Use the id to fetch data about the specific product
  //   // For example:
  //   fetch(`/api/products/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data));
  // }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 h-96">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-gray-600 text-lg">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <div className="mt-6">
            <button
              // onClick={() => {}}
              className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 mr-4"
            >
              Add to Cart
            </button>
            <button
              // onClick={() => {}}
              className="bg-yellow-400 text-white rounded-md px-4 py-2 hover:bg-yellow-500"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Reviews</h3>
        {/* Render reviews here */}
        <Reviews />
      </div>
      {/* Render footer here */}
      <Footer />
    </div>
  );
}

export default ProductDetailPage;

export async function getProductDetails(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const productDetails = await res.json();

  return productDetails;
}
