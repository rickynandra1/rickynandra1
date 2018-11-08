var express = require('express');
var router = express.Router();

var ctrlfoods = require('../controllers/food');


router.post('/food', ctrlfoods.foodsCreate);//
router.get('/food/:foodid', ctrlfoods.foodsReadOne);//
router.put('/food/:foodid', ctrlfoods.foodsUpdateOne);//
router.delete('/food/:foodid', ctrlfoods.foodsDeleteOne);


module.exports = router;