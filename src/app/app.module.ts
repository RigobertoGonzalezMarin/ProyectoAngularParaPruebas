import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FormsReactivesComponent } from './forms/forms-reactives/forms-reactives.component';
import { ProfileEditorComponent } from './forms/profile-editor/profile-editor.component';
import { TemplateBasedFormComponent } from './forms/template-based-form/template-based-form.component';
import { AppRoutingModule } from './app-routing.module';
import { InteractionFatherChildVariableLocalComponent } from './components/interaction-father-child-variable-local/interaction-father-child-variable-local.component';
import { InteractionFatherChildVariableLocalDosComponent } from './components/interaction-father-child-variable-local-dos/interaction-father-child-variable-local-dos.component';
import { ContentProjectionNgContentComponent } from './components/content-projection-ng-content/content-projection-ng-content.component';
import { ContentProjectionNgContentDosComponent } from './components/content-projection-ng-content-dos/content-projection-ng-content-dos.component';
import { DirectivaContentDirective } from './components/directives/directiva-content.directive';
import { BidirecionalComponent } from './templates/bidirecional/bidirecional.component';
import { BidirecionalDosComponent } from './templates/bidirecional-dos/bidirecional-dos.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { UseDirectivesComponent } from './directives/components/use-directives/use-directives.component';
import { EstructRolDirective } from './directives/estruct-rol.directive';
import { TabsComponent } from './angular-material/components/tabs/tabs.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { HostBindingDirective } from './directives/host-binding.directive';
import { PdfGenerateComponent } from './pdf/pdf-generate/pdf-generate.component';
import { UseTemplaterefComponent } from './components/use-templateref/use-templateref.component';
import { MessageChildComponent } from './components/use-templateref/components/message-child/message-child.component';
import { ContentProjectionNgContentTresComponent } from './components/content-projection-ng-content-tres/content-projection-ng-content-tres.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormsReactivesComponent,
    ProfileEditorComponent,
    TemplateBasedFormComponent,
    InteractionFatherChildVariableLocalComponent,
    InteractionFatherChildVariableLocalDosComponent,
    ContentProjectionNgContentComponent,
    ContentProjectionNgContentDosComponent,
    DirectivaContentDirective,
    BidirecionalComponent,
    BidirecionalDosComponent,
    ChangeColorDirective,
    UseDirectivesComponent,
    EstructRolDirective,
    TabsComponent,
    HostBindingDirective,
    PdfGenerateComponent,
    UseTemplaterefComponent,
    MessageChildComponent,
    ContentProjectionNgContentTresComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
