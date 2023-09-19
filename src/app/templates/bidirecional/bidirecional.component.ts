import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidirecional',
  templateUrl: './bidirecional.component.html',
  styleUrls: ['./bidirecional.component.scss']
})
export class BidirecionalComponent implements OnInit {

  mySizePersonalice: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
