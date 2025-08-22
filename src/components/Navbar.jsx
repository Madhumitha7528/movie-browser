import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-yellow-400">
        🎬 Movie Browser
      </Link>
    </nav>
  );
}

export default Navbar;
