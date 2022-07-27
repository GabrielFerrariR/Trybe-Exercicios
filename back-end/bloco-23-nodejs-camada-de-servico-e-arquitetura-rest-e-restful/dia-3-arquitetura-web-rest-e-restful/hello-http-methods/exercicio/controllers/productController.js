const express = require('express');
const productService = require('../services/productService')


const app = express();
app.use(express.json());

const getAll =  async (req, res) => {
  const products = await productService.getAll();

  res.status(200).json(products);
};

const getById = async (req, res) => {
  const product = await productService.getById(req.params.id);

 res.status(200).json(product);
};

const addProduct = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await productService.add(name, brand);

  res.status(201).json(newProduct);
};

const deleteProduct =  async (req, res) => {
  const products = await productService.exclude(req.params.id);

  res.status(200).json(products);
};

const updateProduct = async (req, res) => {
  const { name, brand } = req.body;

  const products = await productService.update(req.params.id, name, brand);

  res.status(204).json(products);
};

module.exports = {
  getAll,
  getById,
  addProduct,
  deleteProduct,
  updateProduct,
};