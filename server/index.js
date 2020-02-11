const express = require('express');

const app = express();
const port = 3005;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/songs/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

app.listen(port, () => console.log(`serving on port ${port}!`));
