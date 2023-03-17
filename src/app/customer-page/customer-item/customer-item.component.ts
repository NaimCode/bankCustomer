import { Customer } from './../customers-section/customer.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent {
  @Input() customer?: Customer;

  constructor() { }
  ngOnInit(): void {
  
  }
}
