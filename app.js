const express = require('express')

const app = express()

app.use(express.json({ extended: true }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/palindrome', require('./routes/palindrome'))
app.use('/api/generate', require('./routes/generate'))

const PORT = 5000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))