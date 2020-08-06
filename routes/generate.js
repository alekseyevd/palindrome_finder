const {Router} = require('express')
const fetch = require('node-fetch');
const router = Router()

router.get('/', async(req, res) => {
  let count = randomInteger(1, 500)
  try {
    let [response] = await fetch(`http://jsonplaceholder.typicode.com/comments?id=${count}`).then(res => res.json())
    let { body } = response

    res.status(200).json({
      result: true,
      text: body
    })
  } catch (error) {
    res.status(500).json({result: false, message: error.message})
  }
})

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


module.exports = router