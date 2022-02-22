const express = require('express');
const router = express.Router();
const { getSingleProduct, getAllProducts, getAllProductsWithQueryFilter, gatAllProductsFilterByRegex } = require('../controllers/products');


router.route('/').post(getSingleProduct).get(getAllProducts);
router.route('/filter').get(getAllProductsWithQueryFilter);
router.route('/regex').get(gatAllProductsFilterByRegex);


module.exports = router;