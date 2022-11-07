const User = require('../Models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signature = '../process.env.JWT_SECRET';
const uuid = require('uuid');

require('dotenv').config();

exports.user_register = async (req, res) => {
  try {
    const { firstName, lastName, birthday, email, password } = req.body;

    if (!(firstName && lastName && birthday && email && password)) {
      return res.status(400).send('all inputs required');
    }

    const firstNameCheck = /^[a-zA-Z]+$/.test(firstName);
    const lastNameCheck = /^[a-zA-Z]+$/.test(lastName);

    if (!(firstNameCheck && lastNameCheck)) {
      return res
        .status(400)
        .send('First and last names can only include letters!');
    }

    const properEmail = '@newage.io';

    if (email.slice(-10).toLowerCase() != properEmail) {
      return res.status(400).send('email must end with "@newage.io"');
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send('user already exists. Please Login');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const _uuid = uuid.v4();
    await User.create({
      firstName,
      lastName,
      birthday,
      email,
      password: encryptedPassword,
      _uuid,
    });
    return res.status(201).send('User Created! You can now Log in!');
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};

exports.sign_in = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send('User does not exist!');
    }

    const passwordcompare = await bcrypt.compare(password, user.password);

    if (!passwordcompare) {
      return res.status(400).send({ status: 'error', error: error.message });
    }

    const data = {
      id: user._uuid,
      email: user.email,
    };

    const userToken = jwt.sign({ data }, signature);
    user.userToken = userToken;

    await user.save();
    return res.status(200).send({
      message: 'OK',
      data: {
        email: user.email,
        userToken: user.userToken,
        id: user._uuid,
      },
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

//test function, functionality will be added
exports.get_user = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};
