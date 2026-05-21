const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sou o Projeto de Node + Express');
});

app.listen(3000, () => {
  console.log('running at http://localhost:3000')
})