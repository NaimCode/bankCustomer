import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from './transactions-section/transaction.modal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent {
  transactions:Transaction[] = [];
  constructor(private serviceTraction:TransactionService) { }
  ngOnInit(): void {
    this.serviceTraction.getTransactions().subscribe((transactions)=>{
      this.transactions=transactions;
    });
  }
onTransactionMade(transaction:Transaction){
  this.transactions.push(transaction);
}
}
