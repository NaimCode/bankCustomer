import { Customer } from './../customers-section/customer.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent {
@Input() customer?: Customer;
}