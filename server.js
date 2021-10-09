const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 5000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Richard'
    });
});

app.get('/clientes', (req, res) => {

    res.render('about');
});

app.get('/productos', (req, res) => {

    res.render('productos');
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});