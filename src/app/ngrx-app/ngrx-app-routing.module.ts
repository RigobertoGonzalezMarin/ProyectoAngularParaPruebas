import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxAppComponent } from './ngrx-app.component';

const routes: Routes = [
  { path: '', component: NgrxAppComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxAppRoutingModule { }
