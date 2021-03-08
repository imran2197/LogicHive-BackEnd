const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    image: String,
    heading: String,
    para: String,
});

const serviceModel = mongoose.model("service", serviceSchema);

module.exports = serviceModel;