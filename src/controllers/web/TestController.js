

module.exports = {

    test: (req, res) => {
        res.status(200).json(req.authUserId);
    },
};
