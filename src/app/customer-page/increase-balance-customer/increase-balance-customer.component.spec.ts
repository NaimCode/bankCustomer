import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseBalanceCustomerComponent } from './increase-balance-customer.component';

describe('IncreaseBalanceCustomerComponent', () => {
  let component: IncreaseBalanceCustomerComponent;
  let fixture: ComponentFixture<IncreaseBalanceCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseBalanceCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncreaseBalanceCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
