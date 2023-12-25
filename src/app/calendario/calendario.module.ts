import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule, // Importante agregar este modulo en cualquier module que se vaya a crear
    CalendarioRoutingModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class CalendarioModule { }
