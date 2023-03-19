import { CustomerInput } from './add-customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customers-section/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  modalIsOpen = false;
  @Output() customerAdded = new EventEmitter<Customer>();

  constructor(private service:CustomerService) { }
  form = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    balance: new FormControl(0,[Validators.required,Validators.min(0)]),
    gender: new FormControl('Male',Validators.required),
  });

  onSubmit(){
    if(this.form.valid){
     this.service.addCustomer(this.form.value as CustomerInput).subscribe((customer)=>{
      this.form.reset()
      this.modalIsOpen=false;
      this.customerAdded.emit(customer);
     });
    }
  

  }
}
