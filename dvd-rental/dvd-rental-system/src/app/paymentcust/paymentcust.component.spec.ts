import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcustComponent } from './paymentcust.component';

describe('PaymentcustComponent', () => {
  let component: PaymentcustComponent;
  let fixture: ComponentFixture<PaymentcustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentcustComponent]
    });
    fixture = TestBed.createComponent(PaymentcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
