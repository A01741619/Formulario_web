import { useState } from "react";

export default function FormComponent({ onAddMovie }) {
  const [nombre, setnombre] = useState('');
  const [correo, setcorreo] = useState('');
  const [edad, setedad] = useState('');
  const [pelicula, setpelicula] = useState('');
  const [personaje, setpersonaje] = useState('');

  const handleSubmit = () => {
    onAddMovie({ nombre, correo, edad, pelicula, personaje });
    setnombre('');
    setcorreo('');
    setedad('');
    setpelicula('');
    setpersonaje('');
  };

  return (
    <>
      <div>
        <div>
          <h1>Tu Nombre</h1>
          <input value={nombre} onChange={e => setnombre(e.target.value)} />
        </div>

        <div>
          <h1>Tu Correo</h1>
          <input value={correo} onChange={e => setcorreo(e.target.value)} />
        </div>

        <div>
          <h1>Tu Edad</h1>
          <input value={edad} onChange={e => setedad(e.target.value)} />
        </div>

        <div>
          <h1>Tu Pelicula Favorita</h1>
          <input value={pelicula} onChange={e => setpelicula(e.target.value)} />
        </div>

        <div>
          <h1>Tu Personaje Favorito</h1>
          <input value={personaje} onChange={e => setpersonaje(e.target.value)} />
        </div>

        <button onClick={handleSubmit}>Agregar</button>
      </div>
    </>
  );
}