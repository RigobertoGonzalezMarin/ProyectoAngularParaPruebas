import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { FormsModule } from '@angular/forms';
import { FormsReactivesComponent } from '../forms/forms-reactives/forms-reactives.component';
import { PrincipalComponent } from './components/principal/principal.component';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormsReactivesComponent,
    CalendarioRoutingModule
  ]
})
export class CalendarioModule { }
