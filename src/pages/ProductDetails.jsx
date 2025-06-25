import { useParams } from "react-router-dom";
import { products } from "../data/data";

function ProductDetails() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === parseInt(productId, 10));

  console.log(product);

  return (
    <div className="py-10 px-6">
      {product ? (
        <>
          <h1 className="text-3xl font-semibold text-center mb-6">
            Product Details
          </h1>
          <div className="flex flex-col items-center rounded-md bg-white p-6">
            <h2 className="text-xl mb-2 font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-700">Price: {product.price}$</p>
            <img
              className="w-40 h-40 mb-4 rounded-md"
              src={product.img}
              alt={product.name}
              style={{ width: "150px" }}
            />
          </div>
        </>
      ) : (
        <p className="text-center text-red-500 text-xl font-bold">Not Found</p>
      )}
    </div>
  );
}

export default ProductDetails;
