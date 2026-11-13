// Query params // Query parameters (parametros de consulta)
//Información que viaja en la URL de la pagína

// obtere todos los libros -> get a /books

//obtener los libros de una categoría -> get -> URL -> /books?category=infantil
//en esa ruta, el query params es ?category=infantil

// del lado del servidor, accedo a la info que viene en la URL a traves del objeto req
// req.query.category -> voy a acceder al valor "infantil"
