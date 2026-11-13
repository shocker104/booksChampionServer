const express = require("express");
const { json } = require("stream/consumers");
const fs = require("fs").promises;

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.end("Bienvenido a Books Champion!");
});

// si el usuario pidió una categoría específica, devolvemos los libros de esa categoría
app.get("/books", async (req, res) => {
  try {
    const data = await fs.readFile("books.json", "utf-8");
    const books = JSON.parse(data);
    const categoria = req.query.category;
    if (categoria) {
      const filteredBooks = books.filter(
        (book) => book.category.toLowerCase() === categoria.toLowerCase(),
      );
      if (filteredBooks.length === 0) {
        return res
          .end("No se encontró un libro de esta categoría.")
          .status(400);
      }
      return res.json(filteredBooks);
    }
    res.send(data);
  } catch (error) {
    console.error(error);
    res.end("Error al realizar la petición.").status(500);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
