import React, { useState } from "react";
import AddMovieModal from "./AddMovieModal";

interface Movie {
  title: string;
  type: string;
  director: string;
  budget: string;
  location: string;
  duration: string;
  year: string;
}

const MoviesTable: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      title: "Inception",
      type: "Movie",
      director: "Christopher Nolan",
      budget: "$160M",
      location: "Los Angeles",
      duration: "2h 28m",
      year: "2010",
    },
    {
      title: "Breaking Bad",
      type: "TV Show",
      director: "Vince Gilligan",
      budget: "$3M per episode",
      location: "Albuquerque",
      duration: "62 episodes",
      year: "2008-2013",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMovie = (movie: Movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Movies & TV Shows</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
        >
          + Add Movie
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Director</th>
              <th className="p-3 text-left">Budget</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Duration</th>
              <th className="p-3 text-left">Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">{movie.title}</td>
                <td className="p-3">{movie.type}</td>
                <td className="p-3">{movie.director}</td>
                <td className="p-3">{movie.budget}</td>
                <td className="p-3">{movie.location}</td>
                <td className="p-3">{movie.duration}</td>
                <td className="p-3">{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Movie Modal */}
      <AddMovieModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddMovie}
      />
    </div>
  );
};

export default MoviesTable;
