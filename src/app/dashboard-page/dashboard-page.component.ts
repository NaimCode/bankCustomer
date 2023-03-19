import { TransactionService } from 'src/app/services/transaction.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from './../customer-page/customers-section/customer.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  lastUpdatedCustomers:Customer[] = [];
  customers:Customer[] = [];
  lastAddedCustomers:Customer[] = [];
  totalCustomers:number = 0;
  totalBalance:number = 0;
  totalTransactions:number = 0;
  constructor(private service:CustomerService,private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.service.getLastUpdated(2).subscribe((customers)=>{
      this.lastUpdatedCustomers=customers;
    });
    this.service.getLastAdded(2).subscribe((customers)=>{
      this.lastAddedCustomers=customers;
    });
    this.service.getCustomers().subscribe((customers)=>{
      this.customers=customers;
      this.totalCustomers = customers.length;
      this.totalBalance = customers.reduce((acc,curr)=>acc+(curr?.balance||0),0);
    } );
    this.transactionService.getTransactions().subscribe((transactions)=>{
      this.totalTransactions = transactions.length;
    }
    );
  }

}
