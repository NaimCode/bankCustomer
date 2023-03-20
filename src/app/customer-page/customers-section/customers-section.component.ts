import { Transaction } from './../transactions-section/transaction.modal';
import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from './customer.model';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-customers-section',
  templateUrl: './customers-section.component.html',
  styleUrls: ['./customers-section.component.css']
})
export class CustomersSectionComponent {
  customers: Customer[] = [];
  @Output() transactionMade = new EventEmitter<Transaction>()
  searchSubject = new Subject<string | undefined>();
  searchSubscription : Subscription|undefined;  
  constructor(private service:CustomerService) {
    this.service.getCustomers().subscribe((customers)=>{
      this.customers=customers;
    });
   }
   ngOnInit():void{
    this.searchSubscription = this.searchSubject
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
    
    )
    .subscribe((results) => { 
        this.service.searchCustomers(results!).subscribe((customers)=>{
          this.customers=customers;
        });
    });

   }

   onCustomerAdded(customer:Customer){
      this.customers=[...this.customers,customer];
   }
    onCustomerUpdated(customer:Customer){
      this.customers=this.customers.map((c)=>c.id===customer.id?customer:c);
    }
   onSearch(event:Event){
      const term = (event.target as HTMLInputElement).value;
      this.searchSubject.next(term);
   }
   onDelete(id:string){
      this.service.removeCustomer(id).subscribe(()=>{
        this.customers=this.customers.filter((customer)=>customer.id!==id);
      });
   }
  onTransactionMade(transaction:Transaction){
    this.customers=this.customers.map((c)=>({...c,balance:(c.balance||0)+transaction.amount}))
    this.transactionMade.emit(transaction);
  }
}
