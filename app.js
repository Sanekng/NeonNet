const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views',(__dirname + '/views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.use(require('./routes/main.routes'));


app.listen(3000, ()=>{
    console.log('Running on http://localhost:3000');
})