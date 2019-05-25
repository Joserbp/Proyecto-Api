var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Automovil= require('../models/Automoviles');

//POST de un auto nuevo
router.post('/', function(req, res, next) {
  console.log(req.body);
  var auto=  Automovil({
    Id: req.body.Id,
    Marca: req.body.Marca,
    Modelo: req.body.Modelo,
    Año: req.body.Año,
    Color: req.body.Color,
    NumPuertas: req.body.NumPuertas
  });

  auto.save(function(err,data){
    if (err) {
      res.send('error');
    }else {
      res.status(200).send(data);
    }
  });

});

//GET de todos los elementos
router.get('/', function(req, res, next) {
  Computadora.find({},function(err,datos){
    res.status(200).json(datos);
  });

});

//GET por un ID
router.get('/:AutoId', function(req, res, next) {
  Automovil.findOne({
    'id': req.params.AutoId
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }

  });
  //res.json(req.params.userId);
});

//DELETE para un ID
router.delete('/:AutoId', function(req, res, next) {
  Automovil.findOneAndDelete({
    id: req.params.AutoId
  }, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});

//DELETE para toda la base
router.delete('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

module.exports = router;
