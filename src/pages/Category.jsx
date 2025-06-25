import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log(location);

  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : Infinity;
  //const maxPrice = location.state.maxPrice;

  const currentCategoryArray = products.filter(
    (product) => product.categoryId === categoryId && product.price <= maxPrice
  );

  function handleChange(e) {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }

  return (
    <div className="py-10 px-6">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Category {categoryId}
      </h1>
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="maxPrice"
        >
          Max Price{" "}
        </label>
        <input
          className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="number"
          id="maxPrice"
          placeholder="Enter max price"
          value={searchParams.get("maxPrice") || ""}
          onChange={handleChange}
        />
      </div>
      <ul className="grid grid-cols-3 gap-4 px-5">
        {currentCategoryArray.map((product) => (
          <li key={product.name}>
            <Link
              className="relative flex flex-col items-center justify-center group"
              to={`/product/${product.id}`}
            >
              <span className="absolute font-semibold text-white text-xl z-10 transition-all animate-bounce group-hover:text-2xl text-center">
                {product.name} <br /> {product.price}$
              </span>
              <img
                className="rounded-md"
                src={product.img}
                alt={product.name}
              />
              <div className="background"></div>
            </Link>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}

export default Category;
