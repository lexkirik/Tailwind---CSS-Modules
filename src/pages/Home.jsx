import { Link, useLocation } from "react-router-dom";

import { categories } from "../data/data";

function Home() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-center mb-8">Categories</h1>
      <ul className="grid grid-cols-3 gap-4 px-5">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              className="relative flex flex-col items-center justify-center"
              to={`/category/${category.name}`}
            >
              <span className="absolute font-semibold text-white text-xl z-10">
                {category.name}
              </span>
              <img
                className="rounded-md"
                src={category.img}
                alt={category.name}
              />
              <div className="absolute bg-gray-950 inset-0 opacity-40 rounded-md"></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
