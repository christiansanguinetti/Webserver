require('dotenv').config();
const express = require('express')
const app = express()
const hbs = require('hbs');
const port = process.env.PORT;


//handl
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(express.static('public'));

//servir contenido estatico
app.get('hola-mundo', function (req, res) {
  res.send('Hola mundo en su respectiva ruta')
})

app.get('/', (req, res) => {
  res.render('home',{
    Nombre: 'Christian Sanguinetti',
    titulo: 'Curso Node'
  });
});
app.get('/generic', (req, res) => {
  res.render('generic',{
    Nombre: 'Christian Sanguinetti',
    titulo: 'Curso Node'
  });
});
app.get('/elements', (req, res) => {
  res.render('elements',{
    Nombre: 'Christian Sanguinetti',
    titulo: 'Curso Node'
  });
});
app.listen(port, () =>{
  console.log(`Example app Listening at http://localhost${port}`)
})