/**
 * Created by apals on 05/12/15.
 */

var express = require('express');
var Image = require('../models/image');

var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var router = express.Router();


router.get("/", function (req, res) {
    Image.find({}).lean().select({}).exec(function (err, data) {
        for (var i = 0; i < data.length; i++) {
            data[i].imageUrl = "http://localhost:63342/imghosting/backend/uploads/" + data[i].filename;
        }
        res.json(data);
    });
});


router.post("/yey", upload.single('image'), function (req, res) {

    var image = new Image(req.body);

    image.setFileName(req.file.filename);
    image.save(function (err) {
        if (err) {
            res.status(422);
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.status(201).end("It went fine!");
        }
    });
});

router.put("/:id", function (req, res) {

    res.status(201).end("asd");
});

router.post("/:id", function (req, res) {

    Image.findOne({_id: req.body.id}, function (err, image) {
        if (err) return handleError(err);

        image.comments.push({
            comment: req.body.comment,
            user: req.body.username
        });

        image.save(function (err) {
            if (err) return handleError(err);
            res.json(image);
        });
    });
});

router.get("/:id", function (req, res) {
    Image.findOne({_id: req.params.id}).lean().exec(function (err, data) {
        data.imageUrl = "http://localhost:63342/imghosting/backend/uploads/" + data.filename;
        res.json(data);
    });
});


module.exports = router;
