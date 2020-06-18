import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObserveComponent } from './create-observe.component';

describe('CreateObserveComponent', () => {
  let component: CreateObserveComponent;
  let fixture: ComponentFixture<CreateObserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
