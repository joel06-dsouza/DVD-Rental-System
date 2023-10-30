import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDialogComponent } from './display-dialog.component';

describe('DisplayDialogComponent', () => {
  let component: DisplayDialogComponent;
  let fixture: ComponentFixture<DisplayDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDialogComponent]
    });
    fixture = TestBed.createComponent(DisplayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
