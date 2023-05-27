var express = require('express');
var router = express.Router();
var {user_model} = require('../models/user_model');


router.get('/id/:id', async function(req, res, next) {
  try {
    const get_user = await user_model.findOne({_id: req.params.id});
    res.json(get_user);
  } catch(err) {
    res.json({message : err});
  }
});

router.get('/following/id/:id', async function(req, res, next) {
  try {
    const get_user = await user_model.findOne({_id: req.params.id}).populate('following');
    res.json(get_user);
  } catch(err) {
    res.json({message : err});
  }
});

router.get('/followers/id/:id', async function(req, res, next) {
  try {
    const get_user = await user_model.findOne({_id: req.params.id}).populate('followers');
    res.json(get_user);
  } catch(err) {
    res.json({message : err});
  }
});

router.get('/username/:username', async function(req, res, next) {
  try {
    const get_user = await user_model.findOne({username: req.params.username});
    if(get_user === null) {
      res.status(404).json(null);
    } else {
      res.json(get_user);
    }
  } catch {
		res.status(404).json(null);
	}
});

router.put('/:id', async function(req, res, next) {
  try {
    const update_user = await user_model.findOneAndUpdate({_id: req.params.id}, req.body);
    res.json(update_user);
  } catch(err) {
    res.json({message : err});
  }
});


router.delete('/:id', async function(req, res, next) {
  try {
    const removed_user = await user_model.findOneAndDelete({_id: req.params.id});
    res.json(removed_user);
  } catch(err) {
    res.json({message : err});
  }
});

module.exports = router;