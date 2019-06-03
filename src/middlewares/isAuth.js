
module.exports = () => (req, res, next) => {
    req.isAuth = () => req.cookies.token !== undefined;
    next();
};
