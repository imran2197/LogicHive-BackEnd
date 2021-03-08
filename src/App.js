const express = require('express');
const cors = require('cors');
const serviceModel = require('./models/ServiceSchema');
const app = express();
app.use(express.json());
app.use(cors());

app.post("/services", async (req, res) => {
    const body = req.body;
    const {image, heading, para} = body;
    const newData = new serviceModel(body);
    await newData.save();
    res.status(201).send({message: "Uploaded"});
});

app.get("/services", async (req, res) => {
    const allData = await serviceModel.find();
    res.status(200).send(allData);
});

module.exports = app;