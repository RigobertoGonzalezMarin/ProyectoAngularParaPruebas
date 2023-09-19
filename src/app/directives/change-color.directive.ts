import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  // Al ponerle el mismo nombre que la directiva permite que pueda recibir valores
  @Input() appChangeColor: string = '';
  @Input() defaultColor = ''; // Puede tener mas de una entrada
  @Input() threeColor = 'red';

  // Con el elementRef se consigue acceso al elemento DOM que contenga esta directiva
  constructor(
    private el: ElementRef
  ) {
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.appChangeColor || this.defaultColor || this.threeColor || 'yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('');
  }
  
  private changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    // this.el.nativeElement.hidden = true;
  }

}
