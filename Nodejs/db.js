const mongoose = require("mongoose");
const { connect } = require('mongoose');

mongoose,connect('mongodb://localhost:27017/CurdDB',(err) => {
    if(!err)
         console.log('MongoBD connection sucessfully done');
    else
        console.log('Error in DB connection :' + JSON.stringify(err, undefined, 2));     
});

module.exports = mongoose;