const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.listen(3000, () =>{
    console.log('escuchando en el puerto 3000');
});