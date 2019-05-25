var mongoose = requiere ('mongoose');
var Schema = mongoose.Schema;

var AutomovilSchema = Schema({
	Id: Number,
	Marca: String,
	Modelo: String,
	Año: Number,
	Color: String,
	Numero de Puertas: Number
});

module.exports = mongoose.model('Automovil', AutomovilSchema);
