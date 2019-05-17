
module.exports = (req, res, next) => {
    req.framework = {};
    req.framework.inputs = {};
    req.framework.data = null;
    next();
};
