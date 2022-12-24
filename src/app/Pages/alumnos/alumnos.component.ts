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
      new Alumno("31742618", "Carlos","Acosta", "carlosacosta@gmail.com", true),
      new Alumno("12323123","Farias","Pablo","fariaspablo@gmail.com", true),
      new Alumno("34545434","Marcelo","Harillo","marceloharillo@hotmail.com" ,true),
      new Alumno("43544343","Martin","Palacios", "martin288@gmail.com",false),
      new Alumno("76676656","Ruben","Lopez","lopezr23@hotmail.com" ,true),
      new Alumno("43567897","Alejo","Cortez","alejoc45@gmail.com" ,true),
      new Alumno("25567865","Mariana","Quevedo","quevedo_mariana@gmail.com",true),
    ]
  
    displayedColumns = ["id", "nombre", "apellido", "mail", "estado", "editar", "eliminar"]

    dniControl = new FormControl()
    nombreControl = new FormControl()
    apellidoControl = new FormControl()
    mailControl = new FormControl();
    estudiantesForm = new FormGroup({

      dni: this.dniControl,
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      mail: this.mailControl,
    })
    panelOpenState = false; 

    onSubmit(){
      this.estudiantes = [...this.estudiantes, new Alumno(this.dniControl.value, this.nombreControl.value, this.apellidoControl.value, this.mailControl.value, true)]
      this.estudiantesForm.reset()
    }
    
    borrarEstudiante(alumno : Alumno){
      this.estudiantes = this.estudiantes.filter((estudiante) => estudiante.id !== alumno.id)
    }
  
    editEstudiante(alumno: Alumno){
      const dialog = this.dialogService.open(DialogStudiantesComponent, {data: alumno})
      
      dialog.afterClosed().subscribe((data)=>{
        console.log(data);
        this.estudiantes = this.estudiantes.map((estudiante)=> estudiante.id === alumno.id ? {
          ...estudiante, ...data
        } : estudiante)
      })
    }
    
  }