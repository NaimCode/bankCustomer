import { Component } from '@angular/core';
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

   onSearch(event:Event){
      const term = (event.target as HTMLInputElement).value;
      this.searchSubject.next(term);
   }
  
}
