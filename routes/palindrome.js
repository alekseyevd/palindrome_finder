const {Router} = require('express')
const validate = require('../middleware/validate')
const getPalindrome = require('../models/getPalindrome')

const router = Router()

router.post('/', validate, (req, res) => {

  let str = req.body.text
  let algo = req.body.algo

  try {
    const start = new Date().getTime()
    let { max, all } = getPalindrome(str, algo)
    const end = new Date().getTime()
    let response = {
      result: true,
      max,
      all,
      origin: str,
      time: end - start
    }
    res.status(200).json(response)
  } catch (e) {
    res.status(400).json({result: false, message: e.message})
  }
})

module.exports = router