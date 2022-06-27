const Author = require('./models/Author');
const Books = require('./models/Book');

const express = require('express');
const { formValidation, passwordValidation } = require('./middlewares');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const { authorID } = req.query;
  const books = await Books.getAll();
  if (!authorID) return res.status(200).json(books);
  const booksById = await Books.getByAuthorId(authorID);
  if (booksById.length !== 0) {
    return res.status(200).json(booksById);
  } else {
    return res.status(400).json({ message : "Author not found"});
  } 
})

app.post('/user', formValidation, passwordValidation, (req, res) => {
  res.status(200).send(req.body);
})

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});