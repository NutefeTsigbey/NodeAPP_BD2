const mongoose = require('mongoose');

//const MONGODB_URI = 'mongodb://localhost/nodeapp';
consta MONGODB_URI = "mongodb+srv://nutefe:GreaterLove007@cluster0.k5eqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('DataBase is connected'))
.catch(err => console.log(err));
    