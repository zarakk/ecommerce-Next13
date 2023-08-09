let products = [];

export default function handler(req, res) {
  const { method } = req;

  try {
    switch (method) {
      case "GET":
        res.status(200).json(products);
        break;
      case "POST":
        const newProduct = req.body;
        if (!newProduct || !newProduct.id || !newProduct.name) {
          throw new Error("Invalid product data");
        }
        products.push(newProduct);
        res.status(201).json(newProduct);
        break;
      case "PUT":
        const updatedProduct = req.body;
        if (!updatedProduct || !updatedProduct.id || !updatedProduct.name) {
          throw new Error("Invalid product data");
        }
        products = products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        );
        res.status(200).json(updatedProduct);
        break;
      case "DELETE":
        const { id } = req.query;
        if (!id) {
          throw new Error("Missing product id");
        }
        products = products.filter((product) => product.id !== id);
        res.status(200).json({ message: "Product deleted" });
        break;
      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
