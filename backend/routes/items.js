var express = require('express');
var router = express.Router();
const {item_model} = require('../models/item_model');
const {user_model} = require("../models/user_model");


router.get('/', async function(req, res, next) {
    try {
        const get_items = await item_model.find({});
        res.json(get_items);
    } catch(err) {
        res.json({message : err});
    }
});


router.post('/', async (req, res, next) => {
    try {
        if(req.body) {
            var new_item = new item_model(req.body);

            await new_item.save();
            res.json(req.body);
        }

    } catch (error) {
        console.log("Erro ao guardar item.");
    }
});

router.delete('/', async function(req, res, next) {
    try {
      const removed_user = await item_model.deleteMany();
      res.json(removed_user);
    } catch(err) {
      res.json({message : err});
    }
  });

module.exports = router;
