import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = "796af752"; 
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Avengers");

  useEffect(() => {
    fetchMovies(search);
  }, []);

  const fetchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(search);
  };

  return (
    <div>
      {/* Search Bar */}
      <form onSubmit={handleSubmit} className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for movies..."
          className="w-80 p-2 rounded-l-lg outline-none text-black"
        />
        <button type="submit" className="bg-yellow-500 px-4 rounded-r-lg hover:bg-yellow-600">
          Search
        </button>
      </form>

      {/* Movies Grid */}
      {movies.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No movies found</p>
      )}
    </div>
  );
}

export default Home;
