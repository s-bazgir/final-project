import React, { useState } from "react";
import A from "../../Componenets/A";
import B from "../../Componenets/B";

const Test = () => {
  const [genres, setGenres] = useState([
    { id: 1, name: "Action", movies: [{ id: 1, title: "Movie 1" }, { id: 2, title: "Movie 2" }] },
    { id: 2, name: "Comedy", movies: [{ id: 3, title: "Movie 3" }, { id: 4, title: "Movie 4" }] },
    { id: 3, name: "Drama", movies: [{ id: 5, title: "Movie 5" }, { id: 6, title: "Movie 6" }] },
  ]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <h1>Genres</h1>
      <A genres={genres} onGenreSelect={handleGenreSelect} />
      {selectedGenre && <B selectedGenre={selectedGenre} />}
    </div>
  );
};

export default Test;
