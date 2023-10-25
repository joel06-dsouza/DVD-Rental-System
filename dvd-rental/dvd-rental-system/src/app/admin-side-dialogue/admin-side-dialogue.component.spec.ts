import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideDialogueComponent } from './admin-side-dialogue.component';

describe('AdminSideDialogueComponent', () => {
  let component: AdminSideDialogueComponent;
  let fixture: ComponentFixture<AdminSideDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSideDialogueComponent]
    });
    fixture = TestBed.createComponent(AdminSideDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
