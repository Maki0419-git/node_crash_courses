const express = require('express');
const router = express.Router();
const { getSingleProduct, getAllProductsByQuery, geAllSelectedPoducts, getAllProducts, geAllSortedProducts, getAllProductsFinal, gatAllProductsFilterByRegex } = require('../controllers/products');


router.route('/').post(getSingleProduct).get(getAllProducts);
router.route('/filter').get(getAllProductsFinal);
router.route('/regex').get(gatAllProductsFilterByRegex);
router.route('/sort').get(geAllSortedProducts);
router.route('/select').get(geAllSelectedPoducts);
router.route('/query').get(getAllProductsByQuery);


module.exports = router;