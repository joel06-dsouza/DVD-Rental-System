import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelFilmsComponent } from './travel-films.component';

describe('TravelFilmsComponent', () => {
  let component: TravelFilmsComponent;
  let fixture: ComponentFixture<TravelFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelFilmsComponent]
    });
    fixture = TestBed.createComponent(TravelFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
