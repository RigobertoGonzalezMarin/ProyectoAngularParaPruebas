import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionNgContentComponent } from './content-projection-ng-content.component';

describe('ContentProjectionNgContentComponent', () => {
  let component: ContentProjectionNgContentComponent;
  let fixture: ComponentFixture<ContentProjectionNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionNgContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjectionNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
