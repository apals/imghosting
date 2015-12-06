var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var modelImage = new Schema({
    title: String,
    imageUrl: String
}, {versionKey: false});

module.exports = mongoose.model("Image", modelImage);
