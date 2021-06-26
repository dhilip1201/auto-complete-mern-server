const express = require('express');
const { addProduct, allProducts } = require('../controller/item');
const router = express.Router();





router.post('/addproduct',addProduct);
router.get('/allproducts',allProducts)

module.exports = router;