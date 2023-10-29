import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyFilmsComponent } from './comedy-films.component';

describe('ComedyFilmsComponent', () => {
  let component: ComedyFilmsComponent;
  let fixture: ComponentFixture<ComedyFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComedyFilmsComponent]
    });
    fixture = TestBed.createComponent(ComedyFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
