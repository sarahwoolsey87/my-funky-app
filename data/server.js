
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const funkyData = require('./data/funkyData.json');

app.get('/api/funky', (req, res) => {
  res.json(funkyData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
