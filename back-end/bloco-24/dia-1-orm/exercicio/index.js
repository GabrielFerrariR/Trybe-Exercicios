const express = require('express');
const booksController = require('./controllers/BooksController')

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/books', booksController.getAll)
.get('/books/:id', booksController.getById)
.post('/books', booksController.create);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
