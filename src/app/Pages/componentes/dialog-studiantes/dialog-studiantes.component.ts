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
  constructor(@Inject(MAT_DIALOG_DATA) public data: Alumno){
  }
  
}

