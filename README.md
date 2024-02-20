# Blog Personal con Nest.js

Este proyecto es un blog personal implementado con Nest.js. Permite la gestión de publicaciones y la adición de comentarios a las publicaciones existentes.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd blog-nest
Instala las dependencias del proyecto:
   npm install

Inicia la aplicación Nest.js:
   npm run start:dev

##Uso
Operaciones CRUD en Publicaciones
Obtener todas las publicaciones:
   GET http://localhost:3000/posts
Obtener una publicación por su ID:
   GET http://localhost:3000/posts/{postId}
Crear una nueva publicación:
   POST http://localhost:3000/posts
   Body: { "id": "postId", "title": "Título de la publicación", "content": "Contenido de la publicación" }
Actualizar una publicación existente:
   PUT http://localhost:3000/posts/{postId}
   Body: { "title": "Nuevo título", "content": "Nuevo contenido" }
Eliminar una publicación:
   DELETE http://localhost:3000/posts/{postId}

Comentarios en Publicaciones
Obtener comentarios para una publicación:
   GET http://localhost:3000/posts/{postId}/comments
Agregar un comentario a una publicación:
   POST http://localhost:3000/posts/{postId}/comments
   Body: { "id": "commentId", "text": "Este es un comentario." }






