import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ActionsTemplaterefService } from './actions-templateref.service';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-use-templateref',
  templateUrl: './use-templateref.component.html',
  styleUrls: ['./use-templateref.component.scss']
})
export class UseTemplaterefComponent implements OnInit {

  data = [
    {
      name: 'Persona 1',
      age: 12,
      city: 'MX',
      status: 'Soltero'
    },
    {
      name: 'Persona 2',
      age: 23,
      city: 'MX',
      status: 'Casado'
    },
    {
      name: 'Persona 3',
      age: 12,
      city: 'MX',
      status: 'Soltero'
    },
    {
      name: 'Persona 4',
      age: 33,
      city: 'MX',
      status: 'Soltero'
    },
  ]

  change = false;

  @ViewChild('showList', {read: TemplateRef, static: true}) showList!: TemplateRef<any>;

  constructor(
    private actionsTemplate: ActionsTemplaterefService,
    private vrf: ViewContainerRef 
  ) { }

  ngOnInit(): void {

    // console.log('>>>>>>', this.vrf);

    // of(([]) => {
    //   delay(1000);
    // }).subscribe(() => {
    //   this.actionsTemplate.showListPeople(this.showList, this.vrf);
    // });
    // setTimeout(() => {
    //   this.vrf.createEmbeddedView(this.showList);
    // }, 1000);
  }

  changeValue() {
    this.actionsTemplate.showListPeople(this.showList, this.vrf);
  }

}
