import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaryFilmsComponent } from './documentary-films.component';

describe('DocumentaryFilmsComponent', () => {
  let component: DocumentaryFilmsComponent;
  let fixture: ComponentFixture<DocumentaryFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentaryFilmsComponent]
    });
    fixture = TestBed.createComponent(DocumentaryFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
