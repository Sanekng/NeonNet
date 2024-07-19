const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.render('index.ejs');
})

routes.get('/newsets', (req, res)=>{
    res.render('newsets.ejs');
})

module.exports = routes;