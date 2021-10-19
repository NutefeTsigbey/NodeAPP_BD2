const express = require('express');
const { dirname } = require('path');
const path = require('path');
const exhbs = require('express-handlebars');


//inicilaization
const app = express();



// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exhbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');


// Middleswares
app.use(express.urlencoded({extended: false}));



// Global Variable s
app.use(express.static(path.join(__dirname, 'public')));


// //Routes 
app.use(require("./routes/index.js"));



//Static Files 




module.exports = app; 

