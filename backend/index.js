const express = require('express');
const app = express();

const PORT = 3000;

const database = require('./db/db.js');


app.listen(PORT, function(){
    console.log('server running on port ' + PORT);
});
