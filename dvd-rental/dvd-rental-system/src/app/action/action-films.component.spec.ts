import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFilmsComponent } from './action-films.component';

describe('ActionFilmsComponent', () => {
  let component: ActionFilmsComponent;
  let fixture: ComponentFixture<ActionFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionFilmsComponent]
    });
    fixture = TestBed.createComponent(ActionFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
