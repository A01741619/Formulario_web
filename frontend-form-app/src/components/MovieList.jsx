import MovieComponent from "./MovieComponent"

export default function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie, index) => (
        <MovieComponent
          key={index}
          nombre={movie.nombre}
          correo={movie.correo}
          edad={movie.edad}
          pelicula={movie.pelicula}
          personaje={movie.personaje}
        />
      ))}
    </>
  );
}