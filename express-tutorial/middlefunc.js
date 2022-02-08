//middleware example:
//!!! it is important to pass it on to a next middleware or send back respond  when using middleware
//or the respond didint terminate
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send('home page') send back res
    next(); //pass to next middleware
}

// ver 4.0 
// const authorize = (req, res, next) => {
//     console.log('authorize');
//     next();
// }

// ver 5.0
const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'yoshino') {
        req.user = { name: "yoshino", id: 45 } //user: { name: 'yoshino', id: 45 },
        // console.log(req);
        next();
    } else {
        res.status(401).send('unauthorized')
    }
    // console.log('authorize');
    // next();
}


module.exports = { logger, authorize };