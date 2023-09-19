import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDirectivaContent]'
})
export class DirectivaContentDirective {

  constructor(
    public templateRef: TemplateRef<unknown>
  ) {}

}
