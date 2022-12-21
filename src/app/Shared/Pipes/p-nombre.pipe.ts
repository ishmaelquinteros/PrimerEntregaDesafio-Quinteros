import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pNombre'
})
export class PNombrePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
