import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bogustab2Component } from './datatable.component';

describe('Bogustab2Component', () => {
  let component: Bogustab2Component;
  let fixture: ComponentFixture<Bogustab2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bogustab2Component]
    });
    fixture = TestBed.createComponent(Bogustab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
