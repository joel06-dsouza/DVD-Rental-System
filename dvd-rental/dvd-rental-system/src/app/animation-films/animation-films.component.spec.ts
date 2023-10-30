import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFilmsComponent } from './animation-films.component';

describe('AnimationFilmsComponent', () => {
  let component: AnimationFilmsComponent;
  let fixture: ComponentFixture<AnimationFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationFilmsComponent]
    });
    fixture = TestBed.createComponent(AnimationFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
