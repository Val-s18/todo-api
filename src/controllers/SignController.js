// const jwt = require('jsonwebtoken')
const User = require('../models/User')

const SignUser = async (userData, callback) => {
  let _error

  // Vérifier la présence des paramètres requis
  // if (!userData.email || !userData.password || !userData.fistName) {
  //   _error = 'Invalid registration data'
  //   return callback(_error, null)
  // }

  try {
    console.log(userData)
    // // Vérifier si l'utilisateur existe déjà dans la base de données
    // const existingUser = await User.findOne({ email: userData.email })

    // if (existingUser) {
    //   _error = 'User already exists'
    //   return callback(_error, null)
    // }

    // Créer un nouvel utilisateur
    const newUser = new User({
      fistName: userData.fistName,
      email: userData.email,
      password: userData.password
      // Ajoutez d'autres champs d'utilisateur si nécessaire
    })

    // Enregistrer le nouvel utilisateur dans la base de données
    await newUser.save()

    // // Créer le payload pour le token JWT
    // const payload = {
    //   id: savedUser.id
    // }

    // // Générer le token JWT
    // jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '7d' }, (error, token) => {
    //   if (error) {
    //     _error = 'Failed to generate token'
    //     return callback(_error, null)
    //   }

    //   // Supprimer le mot de passe de l'utilisateur avant de le retourner
    //   const userPassword = { ...savedUser.toObject() }
    //   delete userPassword.password

    //   // Retourner l'utilisateur et le token
    //   return callback(null, {
    //     user: userPassword,
    //     token
    //   })
    // })
  } catch (error) {
    console.error(error)
    _error = 'Internal server error'
    return callback(_error, null)
  }
}

module.exports = {
  SignUser
}
