const jwt = require('jsonwebtoken');

module.exports = () => (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            console.log(err);
            res.status(401).json({ message: 'Authorization error' });
        } else {
            req.authUserId = decodedToken.userId;
            next();
        }
    });
};
