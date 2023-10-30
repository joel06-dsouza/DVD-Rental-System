import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorFilmsComponent } from './horror-films.component';

describe('HorrorFilmsComponent', () => {
  let component: HorrorFilmsComponent;
  let fixture: ComponentFixture<HorrorFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorrorFilmsComponent]
    });
    fixture = TestBed.createComponent(HorrorFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
