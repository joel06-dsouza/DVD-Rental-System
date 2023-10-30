import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsFilmsComponent } from './sports-films.component';

describe('SportsFilmsComponent', () => {
  let component: SportsFilmsComponent;
  let fixture: ComponentFixture<SportsFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsFilmsComponent]
    });
    fixture = TestBed.createComponent(SportsFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
