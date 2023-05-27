var express = require('express');
var router = express.Router();
const {user_model} = require('../models/user_model');
const List = require('../models/list_model');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const get_users = await user_model.find({});
    res.json(get_users);
  } catch(err) {
    res.json({message : err});
  }
});

router.post('/', async (req, res, next) => {
  try {
    if(req.body) {
      var new_user = new user_model(({ ...req.body}));
  
      await new_user.save();
      res.json(req.body);
    }
    
  } catch (error) {
    console.log("Erro ao guardar utilizador.");
  }
});


router.delete('/', async function(req, res, next) {
  try {
    const removed_users = await user_model.deleteMany();
    res.json(removed_users);
  } catch(err) {
    res.json({message : err});
  }
});


module.exports = router;

