var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var modelImage = new Schema({
    imageUrl: String
}, {versionKey: false});

module.exports = mongoose.model("Image", modelImage);
