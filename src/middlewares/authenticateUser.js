const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies[process.env.JWT_COOKIE_NAME];

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            console.log(err);
            res.status(401).json({ message: 'You must be authenticated' });
        } else {
            req.authUserId = decodedToken.userId;
            next();
        }
    });
};
