let express = require('express');

let app = express();

let airports = require('./airports.json');

app.get('/', (req, res) => res.send('Kiosk imaginary backend at your service :) Go to /cities'));

app.get('/airports', (req, res) => res.send(airports));

app.listen(3000, () => console.log('App listening on port 3000!'));
