
module.exports = (req, res, next) => {
    req.isAuth = () => req.cookies[process.env.JWT_COOKIE_NAME] !== undefined;
    next();
};
