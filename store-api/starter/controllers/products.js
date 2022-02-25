const Product = require('../models/product');


const getAllProducts = async (req, res, next) => {
    const products = await Product.find({});
    res.status(200).send({ msg: "success", products, nbHits: products.length });

}

const getAllProductsByQuery = async (req, res) => {
    const products = await Product.find({ price: { $gt: 100, $lt: 200 } }).select("name price").sort("price")
    res.status(200).send({ msg: "success", products, nbHits: products.length });
}

const geAllSortedProducts = async (req, res) => {
    const { sort } = req.query;
    console.log(sort);
    let result = Product.find({});
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        result = result.sort('createAt');
    }
    const products = await result;
    // const products = await Product.find({}).sort('-name price');
    res.status(200).send({ msg: "success", products, nbHits: products.length });
}

const geAllSelectedPoducts = async (req, res) => {
    const { fields } = req.query;
    let result = Product.find({});
    if (fields) {
        const fieldList = fields.split(',').join(' ');
        result = result.select(fieldList);
    }
    const products = await result;
    // const products = await Product.find({}).sort('-name price');
    res.status(200).send({ msg: "success", products, nbHits: products.length });
}

const gatAllProductsFilterByRegex = async (req, res, next) => {
    const { search } = req.query;
    const products = await Product.find({
        name: { $regex: search, $options: 'i' }
    });
    res.status(200).send({ msg: "success", products, nbHits: products.length });
}


const getSingleProduct = async (req, res) => {
    const { productID } = req.body;
    const product = await Product.findById(productID);
    res.status(200).send({ msg: "success", product });
}

const getAllProductsFinal = async (req, res) => {
    // const products = await Product.find({ featured: true });
    const { featured, company, name, sort, fields, numericFilters } = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte'
        };
        const regEx = /\b(<|>|<=|>=|=)\b/g
        let filters = numericFilters.replace(regEx, (match) => `--${operatorMap[match]}--`);
        console.log(filters);
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach(item => {
            const [filed, operator, value] = item.split('--');
            if (options.includes(filed)) {
                queryObject[filed] = { [operator]: Number(value) }
            }
        })
    }
    let result = Product.find(queryObject);
    if (sort) {
        let sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        result = result.sort('createAt');
    }
    if (fields) {
        const fieldList = fields.split(',').join(' ');
        result = result.select(fieldList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = result.limit(limit).skip(skip);
    const products = await result;
    res.status(200).send({ msg: "success", products, nbHits: products.length });
}



module.exports = { getAllProducts, getAllProductsByQuery, geAllSelectedPoducts, getAllProductsFinal, geAllSortedProducts, gatAllProductsFilterByRegex, getSingleProduct };