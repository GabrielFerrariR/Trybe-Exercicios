const express = require('express');
const ProductModel = require('../models/productModel');

const getAll =  async (req, res) => {
  const products = await ProductModel.getAll();

  return products;
};

const getById = async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  return product;
};

const add = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  return newProduct;
};

const exclude =  async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  return products;
};

const update = async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  return products;
};

module.exports = {
  getAll,
  getById,
  add,
  exclude,
  update,
};