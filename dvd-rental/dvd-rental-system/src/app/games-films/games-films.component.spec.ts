import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesFilmsComponent } from './games-films.component';

describe('GamesFilmsComponent', () => {
  let component: GamesFilmsComponent;
  let fixture: ComponentFixture<GamesFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesFilmsComponent]
    });
    fixture = TestBed.createComponent(GamesFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
