import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Card from "../components/Card";
import LoadingPage from "./LoadingPage";

const People = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const url = process.env.REACT_APP_SOVTECH_BASE_URL + `Swapi/people?pageNumber=${page}`;
    try {
      axios.get(url).then((res) => {
        console.log(res.data.data.results);
        setPeople(res.data.data.results);
        if (res.data.next === null) {
          setHasNext(false);
        }

        if (res.data.previous !== null) {
          setHasPrev(true);
        }
      });
    } catch (error) {
      // handle error
    }
    finally {
      setIsFetching(false);
    }
  }, [page]);
  const handlePrevClick = (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    }
    setHasNext(true);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    console.log("state", people);
    setPage(page + 1);
  };

  return (
    <div className="flex relative flex-col w-screen text-white" id="screen-height">
      {isFetching ? (
         <LoadingPage />
        ) : 
        (
        <>
          <HiChevronLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer transition hover:scale-125 ${
              !hasPrev && "hidden"
            }`}
            onClick={handlePrevClick}
          />
          <div className="grid gap-4 grid-cols-3 px-4 rounded  sm:text-sm  md:text-lg w-[75vw] mx-auto mt-7">
            {people &&
              people.map((person) => <Card key={person.name} person={person} />)}
          </div>
          <HiChevronRight
            className={`text-4xl absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer transition hover:scale-125 ${
              !hasNext && "hidden"
            }`}
            onClick={handleNextClick}
          />
          <div className="flex items-center justify-around space-x-4 m-5">
            <button onClick={handlePrevClick} className="text-lg">
              Prev
            </button>
            <button onClick={handleNextClick} className="text-lg">
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default People;
