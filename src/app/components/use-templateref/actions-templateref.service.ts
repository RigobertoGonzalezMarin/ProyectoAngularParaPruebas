import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { MessageChildComponent } from './components/message-child/message-child.component';

@Injectable({
  providedIn: 'root'
})
export class ActionsTemplaterefService {

  isCreateView = false;

  constructor(
    
  ) { }

  showListPeople(templateref: TemplateRef<any>, vref: ViewContainerRef) {
    if (!this.isCreateView) {
      vref.clear();
      vref.createEmbeddedView(templateref);
      this.isCreateView = true;
    } else {
      vref.clear();


      vref.createComponent<any>(MessageChildComponent);
      this.isCreateView = false;
    }
  }
}
