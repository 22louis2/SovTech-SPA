import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Card from "../components/Card";

const Search = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);
  const [word, setWord] = useState("");
  const [jokes,setJokes] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_SOVTECH_BASE_URL + `Swapi/people?pageNumber=${page}`;
    try {
      axios.get(url).then((res) => {
        setPeople(res.data.results);
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
  }, [page]);
  const handlePrevClick = (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    }
    setHasNext(true);
  };

  const setInput = (e) => {
    setWord(e);
  }

  const searchInput = () => {
    const url = process.env.REACT_APP_SOVTECH_BASE_URL + `Search/search?query=${word}`;
    try {
      axios.get(url).then((res) => {
        console.log(res.data.data.categorySearch.result);
        setJokes(res.data.data.categorySearch.result);
       
      });
    } catch (error) {
      // handle error
    }
    

  }

  const handleNextClick = (e) => {
    e.preventDefault();
    console.log("state", people);
    setPage(page + 1);
  };

  return (
<div className="searchbody">
    <div className="search">
        <div className="header">
        <input type="text"  onChange={(e) => setInput(e.target.value)} />
         <span>
           <button className="searchButton" onClick={()=>searchInput()}>
               Search
            </button>
        </span>
        </div>
   
    </div>
    <div>
        <div className="cardRow">
            { jokes.map((joke) => (  
                
             <div className="img-card iCard-style3">
                <div className="card-content">
                  
                    <div className="card-text">
                        <p>
                            {joke.value}
                        </p>
                    </div>  
                </div>
             </div> 
                
                ))}
 
            </div>
        </div>
 </div>
  );
};

export default Search;
