import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service'
import { NgForm } from '@angular/forms';
import { Empleados } from 'src/app/models/empleados';

declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadosService]
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadosService:EmpleadosService) { }

  ngOnInit() {
    this.getEmpleados();
  }

  addEmpleado(form:NgForm){
    if(form.value._id){
      this.empleadosService.putEmpleados(form.value)
        .subscribe(res =>{
          this.resetForm(form);
          M.toast({html:'Empleado Actualizado Satisfactoriamente !'});
          this.getEmpleados();
        })
    }else{
      console.log(form.value);
      this.empleadosService.postEmpleado(form.value)
        .subscribe(res=>{
          this.resetForm(form);
          M.toast({html:'Empleado Guardado Satisfactoriamente !'});
          this.getEmpleados();
      });
    }
  }

  getEmpleados(){
    this.empleadosService.getEmpleados()
      .subscribe(res => {
        this.empleadosService.empleados = res as Empleados[];
        console.log(res);
      })
  }

  editEmpleado(empleado:Empleados){
    this.empleadosService.selectedEmpleado = empleado;
  }
  deleteEmpleado(_id : string){
    if(confirm('Estas Seguro de querer eliminarlo?')){
      this.empleadosService.deleteEmpleados(_id)
        .subscribe(res =>{
          this.resetForm();
          M.toast({html:'Empleado Eliminado !'});
          this.getEmpleados();
        });
    }
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.empleadosService.selectedEmpleado = new Empleados();
    }
  }

}
