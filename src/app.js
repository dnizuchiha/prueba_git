const express = require('express');
const app = express();

//settings modificamos el comentario
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');