const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const config = require('./config.js');
const profileCtrl = require('./controllers/profileCtrl');
const userCtrl = require('./controllers/userCtrl.js');
const path = require('path');
const port = 3000;

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
};

// middleware

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

// app.use(function (req, res, next) {
//   console.log(`${req.method}: ${req.url}`);
//   next();
// });

app.use(session( {
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true,
}));

// routes

// app.get('/', .index);
app.get('/api/profiles', profileCtrl.getProfiles);
app.post('/api/login',  userCtrl.login);
// app.patch('/', .update);
// app.put('/', .replace);
// app.delete('/', .destroy);

// const { port } = config;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
