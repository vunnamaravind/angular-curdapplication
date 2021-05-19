const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    empno: {type: Number},
    posotion: { type: String },
    office: { type: String },
    salary: { type: Number}
});

module.exports = { Employee };