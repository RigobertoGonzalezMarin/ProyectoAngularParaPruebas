import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReactivesComponent } from './forms-reactives.component';

describe('FormsReactivesComponent', () => {
  let component: FormsReactivesComponent;
  let fixture: ComponentFixture<FormsReactivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsReactivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsReactivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
