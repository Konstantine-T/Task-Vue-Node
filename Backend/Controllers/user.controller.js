const User = require('../Models/user.model')
const bcrypt = require('bcrypt')
const uuid = require('uuid');

require('dotenv').config()

exports.user_register = async (req, res) => {
    try {
        console.log(req.body)
        const {firstName, lastName, birthday, email, password } = req.body
        if (!(firstName && lastName && birthday && email && password)) {
          return res.status(400).send('all inputs required')
        }
        const firstNameCheck = /^[a-zA-Z]+$/.test(firstName);
        const lastNameCheck = /^[a-zA-Z]+$/.test(lastName);
        if(!(firstNameCheck && lastNameCheck)) {
          return res.status(400).send('First and last names can only include letters!')
        }
        const properEmail = '@newage.io'
        if(email.slice(-10).toLowerCase() != properEmail) {
          return res.status(400).send('email must end with "@newage.io"')
        }
        const oldUser = await User.findOne({ email })
        if (oldUser) {
          return res.status(409).send('user already exists. Please Login')
        }
        encryptedPassword = await bcrypt.hash(password, 10)
        const _uuid = uuid.v4()
        console.log(_uuid)
        const user = await User.create({firstName, lastName, birthday, email, password: encryptedPassword, _uuid})
        return res.status(200).send(user)
      } catch (err) {
        return res.status(500).send({
          message: err.message
        })
      }
}

exports.get_user = async (req, res) => {
    try {
        const users = await User.find()
      return res.status(200).send(users)
    } catch (err) {
      return res.status(500).send({
        message: err.message
      })
    }
  }