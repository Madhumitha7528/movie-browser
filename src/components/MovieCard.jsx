import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x400?text=No+Image"}
        alt={movie.Title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{movie.Title}</h3>
        <p className="text-sm text-gray-400">{movie.Year}</p>
        <Link
          to={`/movie/${movie.imdbID}`}
          className="mt-3 inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
