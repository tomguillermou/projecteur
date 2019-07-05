module.exports = {

    view: (req, res) => {

        res.render('index', { auth: req.isAuth() });
    },
};
