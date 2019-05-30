const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Jwt-Token');

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: 'Invalid JWT token' });
        } else {
            req.authUserId = decodedToken.userId;
            next();
        }
    });
};
