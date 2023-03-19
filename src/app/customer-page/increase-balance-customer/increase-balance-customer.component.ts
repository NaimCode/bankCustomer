import { CustomerService } from 'src/app/services/customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from './../transactions-section/transaction.modal';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Customer } from '../customers-section/customer.model';

@Component({
  selector: 'app-increase-balance-customer',
  templateUrl: './increase-balance-customer.component.html',
  styleUrls: ['./increase-balance-customer.component.css'],
})
export class IncreaseBalanceCustomerComponent {
  modalIsOpen = false;
  @Input() customer: Customer | undefined;
  @Output() transactionMade = new EventEmitter<Transaction>();

  constructor(
    private service: TransactionService,
    private customerService: CustomerService
  ) {}
  form = new FormGroup({
    amount: new FormControl(0, Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log("this.customer?.balance", this.customer?.balance)
      const balance =
        (this.customer?.balance! || 0) + (this.form.value?.amount! || 0);
      const c: Customer = { ...this.customer!, balance };
      this.customerService.updateCustomer(c).subscribe((customer) => {
        const t: Transaction = {
          amount: this.form.value?.amount! || 0,
          customerId: this.customer?.id!,
          customerName:
            this.customer?.firstName! + ' ' + this.customer?.lastName!,
          createdAt: new Date(),
          id: new Date().getTime().toString(),
        };
        console.log(customer.balance)
        this.service.makeTransaction(t).subscribe((transaction) => {
          this.form.reset();
          this.modalIsOpen = false;
          this.transactionMade.emit(transaction);
        });
      });
    }
  }
}
