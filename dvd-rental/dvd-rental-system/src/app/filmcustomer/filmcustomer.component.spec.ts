import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmcustomerComponent } from './filmcustomer.component';

describe('FilmcustomerComponent', () => {
  let component: FilmcustomerComponent;
  let fixture: ComponentFixture<FilmcustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmcustomerComponent]
    });
    fixture = TestBed.createComponent(FilmcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
