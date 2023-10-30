import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignFilmsComponent } from './foreign-films.component';

describe('ForeignFilmsComponent', () => {
  let component: ForeignFilmsComponent;
  let fixture: ComponentFixture<ForeignFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeignFilmsComponent]
    });
    fixture = TestBed.createComponent(ForeignFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
