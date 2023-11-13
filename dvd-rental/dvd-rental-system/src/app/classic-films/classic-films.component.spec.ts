import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicFilmsComponent } from './classic-films.component';

describe('ClassicFilmsComponent', () => {
  let component: ClassicFilmsComponent;
  let fixture: ComponentFixture<ClassicFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicFilmsComponent]
    });
    fixture = TestBed.createComponent(ClassicFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
