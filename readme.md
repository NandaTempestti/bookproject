Proyecto:
Proyecto de una libreria virtual que reune libros de autoayuda y desarrolo personal, desarrollado con Mongo, Express,React y Node.

El proyecto cuenta con cinco (5) secciones: cuatro (4) para vista en general y una (1) para ser usada por los administradores. Posee un login para usuarios y otro especialmente para administradores. Como usuario podrá ver los libros y descargarlos; y como administrador tendrá la sección para agregar más libros al sitio.

*Librerias y tecnologías usadas:

Front:
-React js
-Redux
-React router dom
-Axios
-Mui
-React Icons

Back:
-NodeJS
-MongoDB
-Express JS
-JWT
-BcryptJS
-Dotenv
-Cors
-Mongoose

*Endpoints disponibles:

++Para usuarios(user):
Get: /user : devuelve todos los usuarios con sus respectivos: id, nombre, email, contraseña encriptada
Get: /user/:id : devuelve el usuario específico para un id
Post: /signup: registra al usuario
Put: /user/:id : actualiza las propiedades del usuario
Delete:/user/:id : elimina el usuario según el id indicado
Post: /login : inicia la sesión del usuario
Get: /bookings/:id : Obtiene el libro seleccionado según el id

++Para los administradores(admin):
Post: /signup: registra un nuevo administrador
Post: /login: inicia la sesión del administrador
Get: /admin: devuleve todos los administradores

++Para los libros: 
Get: /book :devuelve todos los libros con sus respectivos: id, titulo, autor, descripcion y dirección de la imagen
Get: /book/:id : devuelve el libro específico para un id
Post: /book: agrega un nuevo libro
Delete: /book/:id : elimina un libro según el id indicado

++Para los bookings:
Get: /booking/:id : devuelve el booking específico para un id
Post: /booking: agrega un nuevo booking

Autenticacion:
se utilizó JWT para verificar y proporcionar acceso al usuario a la aplicación. Se verifica las credenciales del usuario, proporciona un token de acceso con tiempo de vencimiento.
JWT codifica los datos JSON en un token firmado que se comparte con el usuario y éste devuelve el token
la verificación se completa.
