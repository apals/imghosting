var mongoose = require("mongoose");
var filePluginLib = require('mongoose-file');
var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;

var Schema = mongoose.Schema;

var modelImage = new Schema({
    title: String,
    filename: {
        type: String,
        set: function (fileName) {
            return fileName;
        }
    }
}, {versionKey: false});


modelImage.methods.setFileName = function findSimilarType(fileName) {
    console.log("setting file name");
    this.filename = fileName;
};

module.exports = mongoose.model("Image", modelImage);
