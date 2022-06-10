import { Component, OnInit } from '@angular/core';
import { tarea } from './tarea';
import { TareasService } from './tareas.services';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  
  constructor(private tareasService: TareasService) {    
  }

  nombreTarea=""
  public tareas: tarea[] = []

  agregarTarea(){
    const newTarea = new tarea(this.nombreTarea);
    this.tareas.push(newTarea);
    this.tareasService.guardarTareas(this.tareas);
    this.obtenerTareas();
    this.nombreTarea="";
  }

  eliminar(indice: number){
    const confirmar = confirm("¿Desea eliminar la tarea?");
    if (!confirmar) {
      return;
    }
    this.tareas.splice(indice,1);
    this.tareasService.guardarTareas(this.tareas);
  }

  Estadotarea(){
    this.tareasService.guardarTareas(this.tareas);
  }

  obtenerTareas(){
    this.tareas = this.tareasService.obtenerTareas();
  }
  ngOnInit(): void {
    this.obtenerTareas();
  }

}
