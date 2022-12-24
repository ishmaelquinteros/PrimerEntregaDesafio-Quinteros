import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/Core/Clases/alumno';
import { AlumnosComponent } from '../../alumnos/alumnos.component';

@Component({
  selector: 'app-dialog-studiantes',
  templateUrl: './dialog-studiantes.component.html',
  styleUrls: ['./dialog-studiantes.component.css']
})
export class DialogStudiantesComponent {  
    
    dniControl = new FormControl()
    nombreControl = new FormControl()
    apellidoControl = new FormControl()
    mailControl = new FormControl();
    estadoControl = new FormControl()

    FormModificarAlumno = new FormGroup({
      dni: this.dniControl,
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      mail: this.mailControl,
      estado: this.estadoControl,
    })
  
  constructor(public dialogRef: MatDialogRef<DialogStudiantesComponent>, @Inject(MAT_DIALOG_DATA) public data: Alumno){ 
    console.log(data)
    this.FormModificarAlumno.patchValue(data)
   }
  
    Cerrar() {
      this.dialogRef.close(this.FormModificarAlumno.value); 
    }
    
}

