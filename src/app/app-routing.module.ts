import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TemplateBasedFormComponent } from './forms/template-based-form/template-based-form.component';
import { ProfileEditorComponent } from './forms/profile-editor/profile-editor.component';
import { FormsReactivesComponent } from './forms/forms-reactives/forms-reactives.component';
import { InteractionFatherChildVariableLocalComponent } from './components/interaction-father-child-variable-local/interaction-father-child-variable-local.component';
import { ContentProjectionNgContentComponent } from './components/content-projection-ng-content/content-projection-ng-content.component';
import { BidirecionalComponent } from './templates/bidirecional/bidirecional.component';
import { UseDirectivesComponent } from './directives/components/use-directives/use-directives.component';
import { TabsComponent } from './angular-material/components/tabs/tabs.component';
import { PdfGenerateComponent } from './pdf/pdf-generate/pdf-generate.component';
import { UseTemplaterefComponent } from './components/use-templateref/use-templateref.component';

const routes: Routes = [
  { path: 'template_based_form', component: TemplateBasedFormComponent },
  { path: 'profile_editor', component: ProfileEditorComponent },
  { path: 'forms-reactives', component: FormsReactivesComponent },
  { path: 'interaction-with-variable-local', component: InteractionFatherChildVariableLocalComponent },
  { path: 'ng-content', component: ContentProjectionNgContentComponent },
  { path: 'bidirecional', component: BidirecionalComponent },
  { path: 'use-directive', component: UseDirectivesComponent },
  { path: 'material-tabs', component: TabsComponent },
  { path: 'pdf-generate', component: PdfGenerateComponent },
  { path: 'use-templateref', component: UseTemplaterefComponent },
  { path: '', pathMatch: 'full', redirectTo: 'profile_editor' },
  {
    path: 'ngrx',
    loadChildren: () => import('./ngrx-app/ngrx-app.module').then(m => m.NgrxAppModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then(m => m.CalendarioModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
