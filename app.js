const express = require('express')
const app = express()
const hbs = require('hbs');

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
app.get('/public/back/templatrte/generic.html', (req, res) => {
  res.render('generic',{
    Nombre: 'Christian Sanguinetti',
    titulo: 'Curso Node'
  });
});
app.get('/public/back/templatrte/elements.html', (req, res) => {
  res.render('elements',{
    Nombre: 'Christian Sanguinetti',
    titulo: 'Curso Node'
  });
});
app.listen(8080)