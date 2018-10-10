import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHomeworkComponent } from './service-homework.component';

describe('ServiceHomeworkComponent', () => {
  let component: ServiceHomeworkComponent;
  let fixture: ComponentFixture<ServiceHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
