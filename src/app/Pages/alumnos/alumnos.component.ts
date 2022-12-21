import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/Core/Clases/alumno';
import { DialogStudiantesComponent } from '../componentes/dialog-studiantes/dialog-studiantes.component';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  constructor (private dialogService: MatDialog){}

  estudiantes: Alumno[] = [
      new Alumno("31742618", "Carlos","Acosta",true),
      new Alumno("12323123","Farias","Pablo",true),
      new Alumno("34545434","Marcelo","Harillo",true),
      new Alumno("43544343","Martin","Palacios",false),
      new Alumno("76676656","Ruben","Lopez",true),
      new Alumno("43567897","Alejo","Cortez",true),
      new Alumno("25567865","Mariana","Qvevedo",true),
    ]
  
    displayedColumns = ["id", "nombre", "apellido", "estado", "editar", "eliminar"]

    dniControl = new FormControl()
    nombreControl = new FormControl()
    apellidoControl = new FormControl()
    estadoControl = new FormControl();
  
    estudiantesForm = new FormGroup({
      dni: this.dniControl,
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      estado: this.estadoControl
    })
    panelOpenState = false; 

    onSubmit(){
      this.estudiantes = [...this.estudiantes, new Alumno(this.dniControl.value, this.nombreControl.value, this.apellidoControl.value, true)]
      this.estudiantesForm.reset()
    }
    
    borrarEstudiante(alumno : Alumno){
      this.estudiantes = this.estudiantes.filter((estudiante) => estudiante.id !== alumno.id)
    }
  
    editEstudiante(alumno: Alumno){
      const dialog = this.dialogService.open(DialogStudiantesComponent, {data: alumno})
    
      dialog.afterClosed().subscribe((value)=>{
        this.estudiantes = this.estudiantes.map((estudiante)=> estudiante.id === alumno.id ? {
          ...estudiante, ...value
        } : estudiante)
      })
    }
    
  }