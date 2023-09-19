import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-directives',
  templateUrl: './use-directives.component.html',
  styleUrls: ['./use-directives.component.scss']
})
export class UseDirectivesComponent implements OnInit {

  color = '';
  conditionRol = '0';
  host_binding: any;

  constructor() { }

  ngOnInit(): void {
  }

}
