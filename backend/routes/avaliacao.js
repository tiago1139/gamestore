var express = require('express');
var router = express.Router();
var {aval_model} = require('../models/avaliacao_model');


router.get('/:id', async function(req, res, next) {
  try {
    const get_aval = await aval_model.findOne({_id: req.params.id})
    .populate('user')
    .populate('item');
    res.json(get_aval);
  } catch(err) {
    res.json({message : err});
  }
});


router.put('/:id', async function(req, res, next) {
  try {
    const update_aval = await aval_model.findOneAndUpdate({_id: req.params.id}, req.body);
    console.log(update_aval.comentario.length);
    res.json(update_aval);
  } catch(err) {
    res.json({message : err});
  }
});


router.delete('/:id', async function(req, res, next) {
  try {
    const removed_aval = await aval_model.findOneAndDelete({_id: req.params.id});
    res.json(removed_aval);
  } catch(err) {
    res.json({message : err});
  }
});

module.exports = router;