import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const click = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div>
        <h1>Mis Películas Favoritas</h1>
        <p>Página para poner tus películas favoritas</p>
      </div>

      <div>
        <button onClick={click}>Agregar Película</button>
      </div>
    </>
  );
}