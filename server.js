const express = require('express');
const app = express();
const path = require('path');



const urlLogger = (request, response, next) => {
  console.log('request URL:', request.url)
  next()
}

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(urlLogger, timeLogger)
app.get('/json', (request, response) => {
  response.status(200).json({"Server stuff": "is cool"});
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
})
