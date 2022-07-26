
const booksServices = require('../services/booksServices');

const getAll = async (_req, res ) => {
  try{
    const response = await booksServices.getAll()
    res.status(200).json(response);
  } catch(error){
    console.log(error);
  }
}

const getById = async (req, res ) => {
  try{
    const { id } = req.params;
    const response = await booksServices.getById(id);
    res.status(200).json(response);
  } catch(error){
    res.status(404).json(error);
  }
}

const create = async (req, res) => {
  try{
    const response = await booksServices.create(req.body);
    res.status(200).json(response);
  } catch(error){
    res.status(404).json(error);
  }
}

module.exports = {
  getAll,
  getById,
  create,
}