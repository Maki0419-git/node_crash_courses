const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (e) {
            next(e) //middleware has default error handler
        }
    }
}

module.exports = asyncWrapper;