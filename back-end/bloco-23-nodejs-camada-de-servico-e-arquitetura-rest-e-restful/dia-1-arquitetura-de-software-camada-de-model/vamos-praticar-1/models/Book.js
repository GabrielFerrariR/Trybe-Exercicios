const connection = require('./connection');

const getAll= async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');
  return books;
}

const getByAuthorId = async (id) => {
  const query = "SELECT * FROM model_example.books as b WHERE author_id = ?;"
  const [books] = await connection.execute(query, [id]);
  return books;
}

module.exports = {
  getAll,
  getByAuthorId
}
