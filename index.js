const express = require('express')
const app = express()
const port = 5000

const config = require('./config/dev');

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("Connected MongoDB..."))
.catch(err => console.log(err));




app.get('/', (req, res) => {
  res.send('Hey ~~ Be Happy !!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})