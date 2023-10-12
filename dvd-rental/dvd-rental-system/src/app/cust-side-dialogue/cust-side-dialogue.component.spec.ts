import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustSideDialogueComponent } from './cust-side-dialogue.component';

describe('CustSideDialogueComponent', () => {
  let component: CustSideDialogueComponent;
  let fixture: ComponentFixture<CustSideDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustSideDialogueComponent]
    });
    fixture = TestBed.createComponent(CustSideDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
