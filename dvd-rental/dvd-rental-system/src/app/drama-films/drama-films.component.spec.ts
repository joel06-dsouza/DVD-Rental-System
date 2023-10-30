import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaFilmsComponent } from './drama-films.component';

describe('DramaFilmsComponent', () => {
  let component: DramaFilmsComponent;
  let fixture: ComponentFixture<DramaFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DramaFilmsComponent]
    });
    fixture = TestBed.createComponent(DramaFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
