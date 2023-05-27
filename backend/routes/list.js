var express = require('express');
var router = express.Router();
var {list_model} = require('../models/list_model');

  router.get('/', async function(req, res, next) {
    try {
      const get_lists = await list_model.find({});
      res.json(get_lists);
    } catch(err) {
      res.json({message : err});
    }
  });

  router.get('/:id', async function(req, res, next) {
    try {
      const get_lists = await list_model.findOne({_id: req.params.id})
      res.json(get_lists);
    } catch(err) {
      res.json({message : err});
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      if(req.body) {
        var new_list = new list_model(({ ...req.body}));
    
        await new_list.save();
        res.json(new_list);
      }
      
    } catch (error) {
      console.log("Erro ao guardar utilizador.");
    }
  });

  router.put('/:id', async function(req, res, next) {
    try {
      console.log("hello");
      console.log(req.body);
      const update_list = await list_model.findOneAndUpdate({_id: req.params.id}, req.body);
      console.log("updating");
      console.log(update_list);
      res.json(update_list);
    } catch(err) {
      res.json({message : err});
    }
  });

  module.exports = router;