export default function MovieComponent({ nombre, correo, edad, pelicula, personaje }) {
  return (
    <>
      <p>{nombre}</p>
      <p>{correo}</p>
      <p>{edad}</p>
      <p>{pelicula}</p>
      <p>{personaje}</p>
    </>
  );
}