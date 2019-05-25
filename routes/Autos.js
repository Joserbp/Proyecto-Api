var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Automovil= require('../models/Automoviles');

router.get('/', function(req, res, next) {
  Computadora.find({},function(err,datos){
    res.status(200).json(datos);
  });

});

/* nuevo Automovil*/
router.post('/', function(req, res, next) {
  console.log(req.body);
  var auto=  Automovil({
    Id: req.body.Id,,
    Marca: req.body.Marca,
    Modelo: req.body.Modelo,
    Año: req.body.Año
    Color: req.body.Color,
    Numero de Puertas: req.body.Numero de Puertas
  });

  auto.save(function(err,data){
    if (err) {
      res.send('error');
    }else {
      res.send(data);
    }
  });

});

module.exports = router;
