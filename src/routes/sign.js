const { loginUser } = require('../controllers/AuthController')
const { SignUser } = require('../controllers/SignController')

const router = require('express').Router()

router.route('/inscription')
  .post(async (req, res) => {
    try {
      const credentials = req.body
      await SignUser(credentials, (error, result) => {
        if (error) {
          return res.status(403).send(error)
        }
        return res.send(result)
      })
      loginUser(credentials, (error, result) => {
        if (error) {
          return res.status(403).send(error)
        }
        return res.send(result)
      })
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

module.exports = router
