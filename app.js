const express = require('express')
const app = express()


app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
  })

app.get('/', (req, res)=> {
res.render('home');
});
app.get('/generic', (req, res)=> {
  res.sendFile(__dirname + '/public/generic.html');
  });
app.get('/elements', (req, res)=> {
    res.sendFile(__dirname + '/public/elements.html');
    });
    
app.listen(8080)