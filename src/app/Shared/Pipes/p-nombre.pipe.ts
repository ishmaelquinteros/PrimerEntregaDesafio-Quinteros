import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pEstado'
})
export class PNombrePipe implements PipeTransform {

  transform(value: boolean){
    return value ? 'Activo' : 'Inactivo';
  }
}
