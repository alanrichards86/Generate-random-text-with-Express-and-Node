const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');

// app.get('/lorem', function(req, res){
//   res.sendFile('main.html', {root: __dirname});
//   res.send(loremIpsum( {count: 3, units: 'paragraphs', format: 'html'} ));
// });

app.get('/home/:number', function(req, res){
  let outPut = loremIpsum({
    count:req.params.number,
    units: 'paragraph', format: 'html'
  });
  res.send(outPut);
});

app.listen(3000);
