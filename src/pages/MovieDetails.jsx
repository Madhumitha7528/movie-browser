import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "796af752";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x400?text=No+Image"}
          alt={movie.Title}
          className="w-72 rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-400 mb-4">{movie.Year} • {movie.Genre}</p>
          <p className="mb-4">{movie.Plot}</p>
          <p><span className="font-semibold">Director:</span> {movie.Director}</p>
          <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
          <p><span className="font-semibold">IMDB Rating:</span> {movie.imdbRating}</p>
          <Link to="/" className="inline-block mt-6 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
