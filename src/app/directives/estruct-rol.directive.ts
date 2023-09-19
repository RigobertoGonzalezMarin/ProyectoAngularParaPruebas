import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEstructRol]'
})
export class EstructRolDirective {

  private isCreatedView = false;

  constructor(
    private templateRef: TemplateRef<any>, // Representa el elemento que tiene esta directiva
    private viewContainer: ViewContainerRef // Accede al contenedor de la vista
  ) { }

  @Input() set appEstructRol(rol: string) {
    if ((rol === '1' || rol === '2') && !this.isCreatedView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.isCreatedView = true;
    } else {
      this.viewContainer.clear();
      this.isCreatedView = false;
    }
  }
}