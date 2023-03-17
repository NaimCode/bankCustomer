import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customers-section',
  templateUrl: './customers-section.component.html',
  styleUrls: ['./customers-section.component.css']
})
export class CustomersSectionComponent {
  customers: Customer[] = [];
  constructor(private service:CustomerService) {
    this.service.getCustomers().subscribe((customers)=>{
      this.customers=customers;
    });
   }
  
}
