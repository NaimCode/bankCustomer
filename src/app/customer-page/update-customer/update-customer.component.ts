import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../customers-section/customer.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {
@Input() customer:Customer|undefined;
modalIsOpen = false;
@Output() customerUpdated = new EventEmitter<Customer>();
form :FormGroup = new FormGroup({
});;
constructor(private service:CustomerService) {

 }

ngOnInit(): void {
  this.form = new FormGroup({
    id: new FormControl(this.customer?.id),
    firstName: new FormControl(this.customer?.firstName,Validators.required),
    lastName: new FormControl(this.customer?.lastName,Validators.required),
    email: new FormControl(this.customer?.email,Validators.required),
    address: new FormControl(this.customer?.address,Validators.required),
    image: new FormControl(this.customer?.image,Validators.required),
    balance: new FormControl(this.customer?.balance,[Validators.required,Validators.min(0)]),
    gender: new FormControl(this.customer?.gender,Validators.required),
  });


}

onSubmit(){
  if(this.form.valid){
   this.service.updateCustomer(this.form.value as Customer).subscribe((customer)=>{
  
    this.modalIsOpen=false;
    this.customerUpdated.emit(customer);
   });
  }

}

}
