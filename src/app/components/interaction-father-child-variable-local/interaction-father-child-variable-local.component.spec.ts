import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionFatherChildVariableLocalComponent } from './interaction-father-child-variable-local.component';

describe('InteractionFatherChildVariableLocalComponent', () => {
  let component: InteractionFatherChildVariableLocalComponent;
  let fixture: ComponentFixture<InteractionFatherChildVariableLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionFatherChildVariableLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionFatherChildVariableLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
