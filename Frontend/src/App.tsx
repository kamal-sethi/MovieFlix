import React from "react";
import Navbar from "./components/Navbar";
import MoviesTable from "./components/MoviesTable";

const App: React.FC = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      type: "Movie",
      director: "Christopher Nolan",
      budget: "$160M",
      location: "Los Angeles",
      duration: "2h 28m",
      year: "2010",
      details: "Mind-bending sci-fi thriller",
    },
  ];

  const handleAddMovie = () => {
    alert("Open Add Movie Modal (coming next!)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff9a9e]">
      <Navbar username="Kamal" />
      <MoviesTable movies={movies} onAddMovie={handleAddMovie} />
    </div>
  );
};

export default App;
