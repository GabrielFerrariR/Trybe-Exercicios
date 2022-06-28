const express = require('express');
const { getAll, getById, addProduct, deleteProduct, updateProduct } = require('../controllers/productController');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', addProduct);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);

module.exports = router;