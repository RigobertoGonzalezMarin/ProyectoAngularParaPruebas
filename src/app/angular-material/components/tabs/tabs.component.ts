import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {


  index = -1;

  constructor() { }

  clickIcon() {
    alert('entro');
  }
}
