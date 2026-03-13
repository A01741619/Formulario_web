import { useState } from "react";
import FormComponent from "../../components/FormComponent";
import MovieList from "../../components/MovieList";

export default function Dashboard() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <>
      <div>
        <h1>Agrega una nueva película favorita!</h1>
        <p>Agrega los datos aqui abajo!</p>
      </div>

      <div>
        <FormComponent onAddMovie={addMovie} />
      </div>

      <div>
        <MovieList movies={movies} />
      </div>
    </>
  );
}