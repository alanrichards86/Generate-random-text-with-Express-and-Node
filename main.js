const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');

app.get('/lorem', function(req, res){
  res.sendFile('main.html', {root: __dirname});
  res.send(loremIpsum( {count: 3, units: 'paragraphs', format: 'html'} ));
});

app.listen(3000);
