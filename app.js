const express = require('express');
const app = express();
const port = 3000;

app.use('/public', express.static(__dirname + '/public'));

app.get('/*', (req, res) => res.sendFile('index.html', { root: __dirname }));

app.listen(port, () => console.log(`To Do List app listening on port ${port}!`));