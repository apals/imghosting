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
    },
    comments: [{
        comment: String,
        user: String
    }]
}, {versionKey: false});


modelImage.methods.setFileName = function (fileName) {
    this.filename = fileName;
};

module.exports = mongoose.model("Image", modelImage);
