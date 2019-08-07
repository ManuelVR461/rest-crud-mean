const mongoose = require('mongoose');

const { Schema } = mongoose;

const esquemaEmpleados = new Schema ({
    nombre: {type:String,required:true},
    puesto: {type:String,required:true},
    oficina: {type:String,required:true},
    salario: {type:Number,required:true}
});

module.exports = mongoose.model('Empleados',esquemaEmpleados);


