import { Injectable } from '@angular/core';
import { tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  CLAVE_LOCAL_STORAGE = "tareas"

  constructor() { }

  obtenerTareas(): tarea[] {
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || "[]")
  }
  guardarTareas(tareas: tarea[]) {
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(tareas))
  }
}