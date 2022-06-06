import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingPage from "./LoadingPage";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");

  //get categories from api
  useEffect(() => {
    const url = process.env.REACT_APP_SOVTECH_BASE_URL + `Chuck/categories`;
    try {
      axios.get(url).then((res) => {
       setCategories(res.data.data.categories);
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  }, []);

  return (
    <div className="text-white w-[75vw] h-[95vh] mx-auto mt-7">
      {error && <p>{error}</p>}
      <ul className="grid gap-4 grid-cols-3 grid-rows-3 p-5 auto-rows-max ">
        {isFetching ? (
          <LoadingPage />
        ) : (
      
          categories.map((category) => (
            <Link to={`/categories/${category}`}>
              <li
                key={category}
                className="bg-[#2952e3] p-3 rounded hover:bg-[#2546bd] cursor-pointer text-center"
              >
                {category}
              </li>
            </Link>
          ))
        )}
      </ul>
    </div>
  );
};

export default Categories;
