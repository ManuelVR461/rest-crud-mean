const Empleados = require('../models/empleados')
const empleadosCtr = {};

empleadosCtr.getEmpleados = async (req,res)=>{
    const empleados = await  Empleados.find();
    res.json(empleados);
        
}

empleadosCtr.createEmpleado = async (req,res)=>{
    const empleado = new Empleados({
        nombre:req.body.nombre,
        puesto:req.body.puesto,
        oficina:req.body.oficina,
        salario:req.body.salario
    });

    await empleado.save()
    console.log(empleado);
    res.json({
        status:'empleado guardado'
    });
}

empleadosCtr.getEmpleado = async (req,res)=>{
    const empleado = await Empleados.findById(req.params.id)
    console.log(req.params.id);
    res.json(empleado);
}

empleadosCtr.editEmpleado = async (req,res)=>{
    const { id } = req.params;
    const empleado = {
        nombre : req.body.nombre,
        puesto : req.body.puesto,
        oficina : req.body.oficina,
        salario : req.body.salario
    }
    await Empleados.findByIdAndUpdate(id,{ $set:empleado },{new:true});
    res.json({
        status:"Empleado actualizado"
    })
}



empleadosCtr.deleteEmpleado = async (req,res)=>{
    await Empleados.findByIdAndDelete(req.params.id);
    res.json({
        status:"Empleado Eliminado"
    })
}


module.exports = empleadosCtr;