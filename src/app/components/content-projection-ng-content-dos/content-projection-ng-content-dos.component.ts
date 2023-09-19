import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection-ng-content-dos',
  templateUrl: './content-projection-ng-content-dos.component.html',
  styleUrls: ['./content-projection-ng-content-dos.component.scss']
})
export class ContentProjectionNgContentDosComponent implements OnInit {

  @Input() valor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
