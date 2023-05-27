var express = require('express');
var router = express.Router();
const {aval_model} = require('../models/avaliacao_model');



router.get('/', async function(req, res, next) {
    try {
        const get_avals = await aval_model.find({})
        .populate('user')
        .populate('item');
        res.json(get_avals);
    } catch(err) {
        res.json({message : err});
    }
});

router.get('/item/:id', async function(req, res, next) {
    try {
        const get_avals = await aval_model.find({item: req.params.id})
        .populate('user')
        .populate('item');
        console.log(get_avals);
        res.json(get_avals);
    } catch(err) {
        res.json({message : err});
    }
});


router.post('/', async (req, res, next) => {
    try {
        if(req.body) {
            var new_aval = new aval_model(req.body);
            console.log(new_aval.comentario.length);

            await new_aval.save();
            res.json(req.body);
        }

    } catch (error) {
        console.log("Erro ao guardar item.");
    }
});

router.delete('/', async function(req, res, next) {
    try {
      const removed_aval = await aval_model.deleteMany();
      res.json(removed_aval);
    } catch(err) {
      res.json({message : err});
    }
  });

module.exports = router;