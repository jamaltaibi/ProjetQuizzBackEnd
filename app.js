const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const userRouter = require("./src/routes/userRouter");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
  });