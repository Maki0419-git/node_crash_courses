const Product = require('../models/product');


const getAllProducts = async (req, res, next) => {
    const products = await Product.find({});
    res.status(200).send({ msg: "success", products, nbHits: products.length });

}

const gatAllProductsFilterByRegex = async (req, res, next) => {
    const { search } = req.query;
    const products = await Product.find({
        name: { $regex: search, $options: 'i' }
    });
    res.status(200).send({ msg: "success", products, nbHits: products.length });
}

const getAllProductsWithQueryFilter = async (req, res) => {
    // const products = await Product.find({ featured: true });
    const { featured, company, name } = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = name;
    }
    const products = await Product.find(queryObject);
    res.status(200).send({ msg: "success", products, nbHits: products.length });
}

const getSingleProduct = async (req, res) => {
    const { productID } = req.body;
    const product = await Product.findById(productID);
    res.status(200).send({ msg: "success", product });
}


module.exports = { getAllProducts, getAllProductsWithQueryFilter, gatAllProductsFilterByRegex, getSingleProduct };