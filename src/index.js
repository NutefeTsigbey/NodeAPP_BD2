require('dotenv').config();
const app = require('./server');
require('./database');

//console.log(process.env.TESTE);

app.listen(app.get('port'), ()=>{
    console.log("Server is on porta: "+app.get('port'));
})