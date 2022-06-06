import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");
  const params = useParams();
  const category = params.category;

  useEffect(() => {
    const url = process.env.REACT_APP_SOVTECH_BASE_URL + `Chuck/random?category=${category}`;
    try {
      axios.get(url).then((res) => {
        setJoke(res.data.data.value);
      });
    } catch (error) {
      // error handling
      setError(error.message);
    }
  }, []);

  return (
    <div className="flex justify-center px-4 text-white sm:text-sm  md:text-lg w-[75vw] h-[95vh] mx-auto mt-7">
      {error !== "" ? error : joke === "" ? "Fetching Joke" : joke}
    </div>
  );
};

export default Category;
