const express = require('express');
const router = express.Router();
const {addItemToCart, getCartItems, removeCartItems} =require('../controller/cart');


router.post('/cart/addtocart',addItemToCart);
router.post("/user/getCartItems",  getCartItems);

module.exports = router;