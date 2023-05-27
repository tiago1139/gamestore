var express = require('express');
var router = express.Router();
const {item_model} = require('../models/item_model');
const {user_model} = require("../models/user_model");


router.get('/id/:id', async function(req, res, next) {
    try {
      const get_item = await item_model.findOne({_id: req.params.id});
      if(get_item == null) {
        res.status(404).json(null);
      } else {
        res.json(get_item);
      }
    } catch(err) {
      res.json({message : err});
    }
});

router.put('/:id', async function(req, res, next) {
    try {
      console.log(req.body);
      const update_item = await item_model
      .findOneAndUpdate({_id: req.params.id}, req.body);
      console.log(update_item);
      res.json(update_item);
    } catch(err) {
      res.json({message : err});
    }
});
  
  
router.delete('/:id', async function(req, res, next) {
    try {
        const removed_item = await item_model.findOneAndDelete({_id: req.params.id});
        res.json(removed_item);
    } catch(err) {
        res.json({message : err});
    }
});

module.exports = router;