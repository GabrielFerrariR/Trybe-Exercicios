const { Book } = require('../models')

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const getById = async (id) => {

  const book = await Book.findByPk(id);
  if(!book) throw new Error('Book not found');
  return book;  
}

const create = async (body) => {
  const book = Book.create({ ...body });
  return book;
}

module.exports = {
  getAll,
  getById,
  create,
};

