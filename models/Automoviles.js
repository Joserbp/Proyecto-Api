var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var AutomovilSchema = Schema({
	Id: Number,
	Marca: String,
	Modelo: String,
	Año: Number,
	Color: String,
	NumPuertas: Number,
	Imagen: String,
});

module.exports = mongoose.model('Automovil', AutomovilSchema);
