const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongodb = require('./data/database.js');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allou-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();    
});

app.use('/', require('./routes'));




mongodb.initDb((err) => {
    if(err){
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node is Running on port ${port}`)})
    }
})