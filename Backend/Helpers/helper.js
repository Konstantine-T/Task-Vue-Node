const jwt = require('jsonwebtoken');
require('dotenv').config();
const signature = process.env.JWT_SECRET;

exports.logged_in = async (req, res, next) => {
  const userToken = req.headers.usertoken || req.body?.headers?.usertoken;

  try {
    if (!userToken) {
      return res.status(400).send({ message: 'user token is required!' });
    }
    const decoded = jwt.verify(userToken, signature);
    if (!decoded.data) {
      return res.status(400).send({ message: 'token is not valid!' });
    }
    req.user = decoded.data;
    next();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
