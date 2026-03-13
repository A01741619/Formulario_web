export async function enviarFormulario(data) {
  const response = await fetch("http://localhost:8080/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al enviar el formulario");
  }

  return await response.json();
}