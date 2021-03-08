const mongoose = require('mongoose');
const app = require('./App');

mongoose.connect("mongodb://localhost:27017/OurServices", {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(9999);