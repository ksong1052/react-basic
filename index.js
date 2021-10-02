const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("Connected MongoDB..."))
.catch(err => console.log(err));

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hey ~~ Have a good day and be Save !!');
});

app.post('/register', (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 그것들을 DB에 넣어 준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    })
  });

});



app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});