const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

const app = express();
const router = express.Router();

require('./config/routes')(router);
app.use(express.static(articleFinder + '/public'));
app.engine('handlebars', expressHandlebars({
    defaultLayout:'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

const db = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

mongoose.connect(db,function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('mongoose connection is successful');
    }
});

app.listen(PORT, function () {
    console.log('listening on port:' + PORT)
});