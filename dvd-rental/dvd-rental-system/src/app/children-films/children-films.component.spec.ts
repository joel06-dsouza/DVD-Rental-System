import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenFilmsComponent } from './children-films.component';

describe('ChildrenFilmsComponent', () => {
  let component: ChildrenFilmsComponent;
  let fixture: ComponentFixture<ChildrenFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenFilmsComponent]
    });
    fixture = TestBed.createComponent(ChildrenFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
