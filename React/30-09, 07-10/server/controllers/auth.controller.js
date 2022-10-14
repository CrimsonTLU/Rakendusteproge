const User = require('../models/user.model')

exports.signup = async (req, res) => {
  User.signup(req.body)
    .then((data) => res.send(`Valmis ${data}`))
    .catch((err) => res.send(`Viga ${err}`))
}

exports.login = async (req, res) => {}

exports.protected = async (req, res) => {}