var mongoose = require("mongoose");
var filePluginLib = require('mongoose-file');
var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;

var Schema = mongoose.Schema;

var modelImage = new Schema({
    title: String,
}, {versionKey: false});

modelImage.plugin(filePlugin, {
    name: "image",
    upload_to: make_upload_to_model('uploads', 'images'),
    relative_to: 'uploads'
});

module.exports = mongoose.model("Image", modelImage);
