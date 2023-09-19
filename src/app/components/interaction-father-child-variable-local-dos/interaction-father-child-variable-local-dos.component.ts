import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction-father-child-variable-local-dos',
  templateUrl: './interaction-father-child-variable-local-dos.component.html',
  styleUrls: ['./interaction-father-child-variable-local-dos.component.scss']
})
export class InteractionFatherChildVariableLocalDosComponent {

  constructor() { }

  counter = 0;
  interval: any;

  start() {
    this.clearTemporizador?.();
    this.interval = setInterval(() => {
      this.counter++;
    }, 1000);
    this.clearTemporizador = () => clearInterval(this.interval);
  }

  stop() {
    this.clearTemporizador?.();
    this.counter = 0;
  }

  private clearTemporizador: VoidFunction | undefined;
}
