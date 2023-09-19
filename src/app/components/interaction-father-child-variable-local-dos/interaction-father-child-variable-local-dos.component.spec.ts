import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionFatherChildVariableLocalDosComponent } from './interaction-father-child-variable-local-dos.component';

describe('InteractionFatherChildVariableLocalDosComponent', () => {
  let component: InteractionFatherChildVariableLocalDosComponent;
  let fixture: ComponentFixture<InteractionFatherChildVariableLocalDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionFatherChildVariableLocalDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionFatherChildVariableLocalDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
