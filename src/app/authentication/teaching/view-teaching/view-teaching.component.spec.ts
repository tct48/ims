import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeachingComponent } from './view-teaching.component';

describe('ViewTeachingComponent', () => {
  let component: ViewTeachingComponent;
  let fixture: ComponentFixture<ViewTeachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTeachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
