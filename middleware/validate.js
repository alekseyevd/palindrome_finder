module.exports = (req, res, next) => {
  try {
    if (req.body.text.length < 3) throw new Error("Text's length must be more than 3 chars")

    if (req.body.algo > 2) throw new Error("Unknown method. You should use 1 or 2 algo method")

    next()
  } catch (e) {
    res.status(400).json({
      result: false,
      message: e.message
    })
  }

 
}