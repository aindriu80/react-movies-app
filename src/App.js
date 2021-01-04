import React, { useEffect, useState } from "react";

import Movie from "./components/Movie";

const FEATURED_API = process.env.REACT_APP_API_KEY_ENV;

// const IMG_API = process.env.IMG_API_ENV;
// const SEARCH_API = process.env.IMG_API_ENV;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c8d8c40713c2164f10bc006b246301eb&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return <div>{movies.length > 0 && movies.map((movie) => <Movie />)}</div>;
}

export default App;
