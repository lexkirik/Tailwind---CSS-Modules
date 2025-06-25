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
              className="relative flex flex-col items-center justify-center group"
              to={`/category/${category.name}`}
            >
              <span className="absolute font-semibold text-white text-xl z-10 group-hover:text-red-500 transition-all animate-bounce">
                {category.name}
              </span>
              <img
                className="rounded-md"
                src={category.img}
                alt={category.name}
              />
              <div className="background"></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
