var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Automovil= require('../models/Automoviles');

//POST de un auto nuevo
router.post('/', function(req, res, next) {

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
      res.status(404).json({mensaje: 'Error al guardar'});
    }else {
      res.status(201).json({mensaje: 'Auto guardado'})
    }
  });

});

//GET de todos los elementos
router.get('/', function(req, res, next) {
  Automovil.find({},function(err,data){
    res.status(200).json(data);
  });

});

//GET por un ID
router.get('/:AutosId', function(req, res, next) {
  Automovil.findOne({
    'Id': req.params.AutosId
  }, function(err, data) {
    if (data == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(data);
    }

  });
});

//PUT para un ID
router.put('/:AutosId',function(req, res, error){
  let update =req.body;
  Automovil.findOneAndUpdate({'Id': req.params.AutosId}, update, function(err, data){
    if(err){
      res.status(404).json({mensaje: "No se encontro Id"});
    } else{
      res.status(200).json(data);
    }
  });
});

 //PUT para toda la base
router.put('/', function (req, res){
  res.status(405).json({mensaje:'Accion no permitida'});
});




//DELETE para un ID
router.delete('/:AutosId', function(req, res, next) {
  Automovil.findOneAndDelete({
    'Id': req.params.AutosId
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
