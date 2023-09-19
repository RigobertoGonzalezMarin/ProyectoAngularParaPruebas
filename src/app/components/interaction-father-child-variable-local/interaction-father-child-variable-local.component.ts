import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { InteractionFatherChildVariableLocalDosComponent } from '../interaction-father-child-variable-local-dos/interaction-father-child-variable-local-dos.component';

@Component({
  selector: 'app-interaction-father-child-variable-local',
  templateUrl: './interaction-father-child-variable-local.component.html',
  styleUrls: ['./interaction-father-child-variable-local.component.scss']
})
export class InteractionFatherChildVariableLocalComponent 
  implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild('variableLocalChild') 
    private temporizador!: InteractionFatherChildVariableLocalDosComponent;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterContentInit(): void {
  }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      // Se sobrescribe la función para que devuelva el valor de la variable del hijo
      this.intervals = () => this.temporizador.counter;
    }, 0);
  }

  intervals() {
    return 0;
  }

  start() {
    this.temporizador.start();
  }

  stop() {
    this.temporizador.stop();
  }

}
