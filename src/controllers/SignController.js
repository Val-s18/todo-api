// const jwt = require('jsonwebtoken')
const User = require('../models/User')

const SignUser = async (userData, callback) => {
  let _error

  try {
    // Créer un nouvel utilisateur
    const newUser = new User({
      fistName: userData.fistName,
      email: userData.email,
      password: userData.password

    })

    // Enregistrer le nouvel utilisateur dans la base de données
    await newUser.save()
    // error
  } catch (error) {
    console.error(error)
    _error = 'Internal server error'
    return callback(_error, null)
  }
}

module.exports = {
  SignUser
}
