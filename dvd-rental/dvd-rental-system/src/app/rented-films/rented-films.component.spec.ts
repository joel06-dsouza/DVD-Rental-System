import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedFilmsComponent } from './rented-films.component';

describe('RentedfilmsComponent', () => {
  let component: RentedFilmsComponent;
  let fixture: ComponentFixture<RentedFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentedFilmsComponent]
    });
    fixture = TestBed.createComponent(RentedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
