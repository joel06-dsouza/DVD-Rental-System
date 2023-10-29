import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicFilmsComponent } from './music-films.component';

describe('MusicFilmsComponent', () => {
  let component: MusicFilmsComponent;
  let fixture: ComponentFixture<MusicFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicFilmsComponent]
    });
    fixture = TestBed.createComponent(MusicFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
