var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var compression = require('compression');
var image = require('./routes/image');
var logger = require('morgan');

var router = express.Router();

router.use(cors());
router.use(logger("dev"));
router.use(compression());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get("/hello", function (req, res) {
    res.json({message: "what up my amigo"});
});

router.use("/images", image);

module.exports = router;