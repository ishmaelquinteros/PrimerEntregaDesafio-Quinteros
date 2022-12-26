import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDTitulos]'
})
export class DTitulosDirective {

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2) { 
    renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px',)  
  }
   
}
