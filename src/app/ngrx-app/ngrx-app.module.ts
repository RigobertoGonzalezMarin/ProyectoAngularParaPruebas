import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxAppRoutingModule } from './ngrx-app-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer/counter.reducer';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { NgrxAppComponent } from './ngrx-app.component';


@NgModule({
  declarations: [
    NgrxAppComponent,
    MyCounterComponent,
  ],
  imports: [
    CommonModule,
    NgrxAppRoutingModule,
    StoreModule.forRoot({count: counterReducer})
  ]
})
export class NgrxAppModule { }
