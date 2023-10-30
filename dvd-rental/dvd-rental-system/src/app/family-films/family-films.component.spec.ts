import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyFilmsComponent } from './family-films.component';

describe('FamilyFilmsComponent', () => {
  let component: FamilyFilmsComponent;
  let fixture: ComponentFixture<FamilyFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyFilmsComponent]
    });
    fixture = TestBed.createComponent(FamilyFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
