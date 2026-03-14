# Formulario_web

# Instrucciones para ejecutar el backend

Clonar el repositorio desde GitHub:
git clone https://github.com/A01741619/Formulario_web.git

Entrar a la carpeta del backend:
cd backend-form-api

Ejecutar la aplicación con Maven:
./mvnw spring-boot:run

# Instrucciones para ejecutar el frontend
Entrar a la carpeta del frontend:
cd frontend-form-app

Instalar las dependencias del proyecto:
npm install

Ejecutar la aplicación:
npm start

El frontend se ejecutará en:
http://localhost:3000

## Cómo se conecta el Backend con el Frontend

El frontend desarrollado con React envía los datos del formulario al backend mediante peticiones HTTP a una API REST. El archivo CorsConfig en el backend permite la comunicación entre el servidor y el frontend. Desde React, el servicio formService se encarga de enviar la solicitud al endpoint del backend. El backend recibe los datos, los procesa y envía una respuesta que posteriormente se muestra en la interfaz del usuario.

# Descripción breve del proyecto
Este proyecto consiste en una aplicación web compuesta por un frontend desarrollado con React y un backend construido con Spring Boot. La aplicación permite que los usuarios completen un formulario con varios campos de entrada desde una interfaz web.

Cuando el usuario envía el formulario, el frontend envía los datos al backend mediante una petición HTTP a una API REST. El backend recibe la información, la procesa utilizando su lógica de negocio y devuelve una respuesta que posteriormente es mostrada en la interfaz del usuario.


# Capturas
Formulario funcionando

<img width="638" height="324" alt="caputuraFrotend" src="https://github.com/user-attachments/assets/c5754b0d-803c-4f85-9dda-88cd936b2db0" />

<img width="638" height="324" alt="caputuraFrotend1" src="https://github.com/user-attachments/assets/faa9e493-46a2-4afe-8041-abc4cf0803cd" />

Petición en el navegador


<img width="640" height="335" alt="requestBackend" src="https://github.com/user-attachments/assets/85a8f771-a2cb-4b1b-9801-e3479281ff2f" />
<img width="640" height="335" alt="requestBackend1" src="https://github.com/user-attachments/assets/1e50c3dd-524b-4379-9f3f-e6c47aa797ad" />

Aqui se puede ver como el formService.js hae un request al metodo post del backend.


Respuesta del backend


<img width="640" height="335" alt="respuestaBackend1" src="https://github.com/user-attachments/assets/c496d7ee-5998-4182-a4ab-5e76482143d2" />
