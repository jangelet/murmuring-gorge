//import Express library/module
const express = require('express');
//create express application
//represents running express app
const app = express();

//creates new route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//if there isn't an environment variable already defined by heroku,
//then use 5000 by default
const PORT = process.env.PORT || 5000;

//Express tells Node it wants to listen for inc. traffic on port 5000
app.listen(PORT);
