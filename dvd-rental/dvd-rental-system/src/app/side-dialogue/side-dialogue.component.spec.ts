import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDialogueComponent } from './side-dialogue.component';

describe('SideDialogueComponent', () => {
  let component: SideDialogueComponent;
  let fixture: ComponentFixture<SideDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideDialogueComponent]
    });
    fixture = TestBed.createComponent(SideDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
