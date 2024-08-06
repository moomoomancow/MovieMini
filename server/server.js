const express = require('express');
const app = express();
const port = 8080;
const knex = require('knex')(
    require('./knexfile.js')[process.env.NODE_ENV||'development'])

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/movies', function(req, res) {
  knex('movies')
    .select('*')
    .then(data => res.status(200).json(data))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))