const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.render('index.ejs');
})

routes.get('/newsets', (req, res)=>{
    res.render('newsets.ejs');
})

routes.get('/material-one', (req, res)=>{
    res.render('material-one.ejs');
})

routes.get('/cart', (req, res)=>{
    res.render('cart.ejs')
});

routes.get('/about-us', (req, res)=>{
    res.render('about-us.ejs');
});

routes.get('/contact-us', (req, res)=>{
    res.render('contact-us.ejs');
});

routes.post('/contact-us', (req, res)=>{
    res.redirect('/')
})


module.exports = routes; 