import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Empleados } from '../models/empleados';
import { EmpleadosComponent } from '../components/empleados/empleados.component';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  
  selectedEmpleado : Empleados;

  empleados : Empleados[];

  readonly URL_API = 'http://localhost:3000/api/empleados';

  constructor(private http:HttpClient) {
    this.selectedEmpleado = new Empleados();
  }

  getEmpleados(){
    return this.http.get(this.URL_API);
  }

  postEmpleado(empleado: Empleados){
    return this.http.post(this.URL_API, empleado);
  }

  putEmpleados(empleado:Empleados){
    return this.http.put(this.URL_API + `/${empleado._id}`,empleado);
  }

  deleteEmpleados(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
