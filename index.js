var express = require('express')
var ejs = require("ejs");

var app = express()

app.engine('ejs',ejs.renderFile);

app.use(express.static('public'))

app.get('/', (req, res) => {
  var msg = 'This is Express'
  res.render('index.ejs' ,
    {
      title: 'Keystroke Collection',
      content: msg,
      link: {href:'/thanks', text:'submit'}
    });
});

app.get('/thanks', (req, res) => {
  var msg = 'Thanks for your cooperation !!'
  res.render('index.ejs' ,
    {
      title: 'thanks' ,
      content: msg
    });
});

var server = app.listen(3000, () => {
  console.log('Sever is running!')
})
