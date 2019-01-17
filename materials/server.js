const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({message: 'hi'}));

app.listen(3000);
