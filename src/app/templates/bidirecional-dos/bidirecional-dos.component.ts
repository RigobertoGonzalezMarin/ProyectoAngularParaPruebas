import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bidirecional-dos',
  templateUrl: './bidirecional-dos.component.html',
  styleUrls: ['./bidirecional-dos.component.scss']
})
export class BidirecionalDosComponent {

  @Input() size = 0;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(num: number) {
    this.size = Math.min(40, Math.max(8, +this.size + num));
    this.sizeChange.emit(this.size);
  }

}
