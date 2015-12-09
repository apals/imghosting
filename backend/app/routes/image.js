/**
 * Created by apals on 05/12/15.
 */

var express = require('express');
var Image = require('../models/image');

var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

var router = express.Router();


router.get("/", function (req, res) {
    Image.find({}).select({}).exec(function (err, data) {
        res.json(data);
    });
});



router.post("/yey", upload.single('image'), function (req, res) {
    var image = new Image(req.body);
    image.setFileName(req.file.filename);
    image.save(function (err) {
        if (err) {
            res.sendStatus(422);
        } else {
            res.status(201).json(image);
        }
    });
});

router.post("/", function (req, res) {
    console.log(req.body);
    if(!req.body.imageUrl) {
        res.sendStatus(422);
        return;
    }
    var image = new Image(req.body);
    image.save(function (err) {
        if (err) {
            res.sendStatus(422);
        } else {
            res.status(201).json(image);
        }
    });
});

router.get("/:id", function(req, res) {
    Image.findOne({_id: req.params.id}).exec(function(err, data) {
        res.json(data);
    });
});

module.exports = router;
