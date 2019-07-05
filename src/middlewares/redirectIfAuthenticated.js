
module.exports = (req, res, next) => {
    if (req.isAuth()) {
        res.redirect('/');
    }
    next();
};
