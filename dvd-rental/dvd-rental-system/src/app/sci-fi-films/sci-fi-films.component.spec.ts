import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciFiFilmsComponent } from './sci-fi-films.component';

describe('SciFiFilmsComponent', () => {
  let component: SciFiFilmsComponent;
  let fixture: ComponentFixture<SciFiFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SciFiFilmsComponent]
    });
    fixture = TestBed.createComponent(SciFiFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
